"use server";

import crypto from "crypto";
import * as jwt from "jsonwebtoken";
import { v2 as sdk } from "cloudinary";
import { cookies } from "next/headers";
import * as admin from "firebase-admin";
import { redirect } from "next/navigation";

sdk.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function upload_doc({ file, folder }) {
  const uploader = sdk.uploader;
  let resource;
  try {
    resource = await uploader.upload(file, {
      folder: folder,
    });
  } catch (e) {
    console.log(e);
  }

  return resource;
}

async function checkAuthentication(token) {
  const cookieStore = cookies();
  let role = cookieStore.get("role");
  let jwtToken = cookieStore.get("jwt");

  if (token && jwtToken.value) {
    let app = getApp();
    let auth = app.auth();
    let res = await auth.verifyIdToken(token);
    let decoded = jwt.verify(jwtToken.value, process.env.SALT);

    if (res.role == role.value && res.role == decoded.role) {
      return {
        decoded,
        app,
      };
    } else {
      redirect("/login");
    }
  } else {
    redirect("/login");
  }
}

export async function getUserData(token) {
  let { app, decoded } = await checkAuthentication(token);
  const db = app.firestore();
  let profile;
  let query = db.collection("creds").where("username", "==", decoded.username);
  let snapshot = await query.select("username", "name", "role").get();

  snapshot.forEach((doc) => {
    profile = doc.data();
  });

  return { profile };

  // const cookieStore = cookies();
  // let role = cookieStore.get("role");
  // let jwtToken = cookieStore.get("jwt");

  // if (token && jwtToken.value) {
  //   let profile;
  //   let app = getApp();
  //   let auth = app.auth();
  //   let res = await auth.verifyIdToken(token);
  //   let decoded = jwt.verify(jwtToken.value, process.env.SALT);

  //   // console.log("decoded", decoded);
  //   // console.log(role);
  //   // console.log(res);
  //   if (res.role == role.value && res.role == decoded.role) {
  //     // console.log(res);
  //     // console.log(role);
  //     const db = app.firestore();

  //     // getting profile details
  //     let query = db
  //       .collection("creds")
  //       .where("username", "==", decoded.username);
  //     let snapshot = await query.select("username", "name", "role").get();

  //     snapshot.forEach((doc) => {
  //       profile = doc.data();
  //     });

  //     return { profile };
  //   } else {
  //     redirect("/login");
  //   }
  // } else {
  //   redirect("/login");
  // }
}

export async function getLoanData(token, type) {
  let { app, decoded } = await checkAuthentication(token);
  const db = app.firestore();

  switch (type) {
    case "Personal":
      let data = [];
      let query = db.collection("personal_loans");
      let snapshot = await query.get();

      snapshot.forEach((doc) => {
        data.push({ id: doc.id, data: doc.data() });
      });

      return { data };
    default:
      return {};
  }
}

function getApp() {
  let app;
  // Initialising the firebase app using serviceAccountCredentials
  try {
    const serviceAccountCredentials = JSON.parse(process.env.KEY);
    app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccountCredentials),
    });
  } catch (error) {
    // console.log(error);
    app = admin.app();
  }

  return app;
}

export async function login(username, password) {
  let profile;
  let app = getApp();
  const auth = app.auth();
  const db = app.firestore();

  // getting profile details
  let query = db.collection("creds").where("username", "==", username);
  let snapshot = await query
    .select("username", "password", "salt", "role")
    .get();

  snapshot.forEach((doc) => {
    profile = doc.data();
  });

  // creating user provided password hash
  password = crypto
    .pbkdf2Sync(password, profile.salt, 10, 16, "sha512")
    .toString("hex");

  // checking password
  if (profile.password == password) {
    try {
      const cookieStore = cookies();
      let payload = {
        username: profile.username,
        role: profile.role,
      };
      let string = jwt.sign(payload, process.env.SALT);
      let uuid = crypto.randomUUID();
      // Creating a temporary token to sign in the user so that we can use the role inside security rules
      const token = await auth.createCustomToken(uuid, {
        role: profile.role,
      });
      cookieStore.set("jwt", string, {
        httpOnly: true,
        maxAge: 86400,
      });
      cookieStore.set("role", profile.role, {
        httpOnly: true,
        maxAge: 86400,
      });
      return { token };
    } catch (error) {
      return { error };
    }
  } else {
    return { error: "Username or password is incorrect" };
  }
}
