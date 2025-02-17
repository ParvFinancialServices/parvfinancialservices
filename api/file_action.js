"use server";

import crypto from "crypto";
import * as jwt from "jsonwebtoken";
import { v2 as sdk } from "cloudinary";
import { cookies } from "next/headers";
import * as admin from "firebase-admin";
import { redirect } from "next/navigation";
import { error } from "console";
import { get } from "lodash";
import { getLoanType, getUsername } from "@/lib/utils";
import * as nodemailer from "nodemailer";
import {
  getAccountCreationSuccessTemplate,
  getOTPTemplate,
} from "@/config/mailTemplate";

sdk.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

let app;

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

  if (token) {
    if (jwtToken?.value) {
      getApp();
      let auth = admin.auth();
      let res = await auth.verifyIdToken(token);
      let decoded = jwt.verify(jwtToken.value, process.env.SALT);

      if (res.role == role.value && res.role == decoded.role) {
        return {
          decoded,
        };
      } else {
        redirect("/login");
      }
    } else {
      throw new Error("JWT not found");
    }
  } else {
    redirect("/login");
  }
}

export async function getUserData(token) {
  let { decoded } = await checkAuthentication(token);
  const db = admin.firestore();
  let profile = {};
  let query = db.collection("creds").where("username", "==", decoded.username);
  let snapshot = await query.get();

  snapshot.forEach((doc) => {
    doc = doc.data();
    profile.username = get(doc, "username");
    profile.name = get(doc, "info.sections[0].fields[0].value");
    profile.role = get(doc, "role");
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
  await checkAuthentication(token);
  const db = admin.firestore();

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
  if (process.env.NEXT_PUBLIC_TEST_MODE) {
    if (admin.apps.length == 0) {
      // Initialising the firebase app using serviceAccountCredentials
      try {
        const serviceAccountCredentials = JSON.parse(process.env.KEY);
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccountCredentials),
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("else");
    }
  } else {
    // Initialising the firebase app using serviceAccountCredentials
    try {
      const serviceAccountCredentials = JSON.parse(process.env.KEY);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccountCredentials),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return app;
}

export async function login(username, password) {
  let profile = {};
  getApp();
  const auth = admin.auth();
  const db = admin.firestore();

  // getting profile details
  let query = db.collection("creds").where("username", "==", username);
  let snapshot = await query.get();

  snapshot.forEach((doc) => {
    doc = doc.data();
    profile.username = get(doc, "username");
    profile.password = get(doc, "password");
    profile.salt = get(doc, "salt");
    profile.role = get(doc, "role");
  });

  // snapshot.forEach((doc) => {
  //   profile = doc.data();
  // });

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
      });
      cookieStore.set("role", profile.role, {
        httpOnly: true,
      });
      return { token, role: profile.role };
    } catch (error) {
      console.log(error);
      return { error: "Unexpected error occured" };
    }
  } else {
    return { error: "Username or password is incorrect" };
  }
}

export async function createDSAAccount(data) {
  // console.log(data);
  // try {
  const cookieStore = cookies();

  getApp();
  let db = admin.firestore();
  let snapshot = await db.collection("creds").where("role", "==", "DSA").get();
  let length = snapshot.size + 1;

  let username = "DSA" + length;
  let salt = crypto.randomBytes(16).toString("hex");
  let pass =
    get(data, "info.sections[0].fields[0].value").slice(0, 3) +
    get(data, "info.sections[0].fields[5].value").slice(0, 3);
  let password = crypto
    .pbkdf2Sync(pass, salt, 10, 16, "sha512")
    .toString("hex");
  data.salt = salt;
  data.password = password;
  data.username = username;
  data.role = "DSA";

  await db.collection("creds").add(data);

  //need to remove from production
  // cookieStore.set("username", username);
  // cookieStore.set("password", pass);

  redirect("/login");
}

export async function createAccount(token, data) {
  const cookieStore = cookies();
  let { decoded } = await checkAuthentication(token);
  console.log("decoded", decoded);
  console.log("data", JSON.stringify(data));
  if (decoded.role !== "Admin") {
    return false;
  }

  const db = admin.firestore();
  const role = get(data, "info.sections[1].fields[0].value");
  let snapshot = await db.collection("creds").where("role", "==", role).get();
  let length = snapshot.size + 1;

  let username = getUsername(role, length);
  let salt = crypto.randomBytes(16).toString("hex");
  let pass =
    get(data, "info.sections[0].fields[0].value").slice(0, 3) +
    get(data, "info.sections[0].fields[5].value").slice(0, 3);
  let password = crypto
    .pbkdf2Sync(pass, salt, 10, 16, "sha512")
    .toString("hex");
  let email = get(data, "info.sections[0].fields[7].value");
  data.salt = salt;
  data.password = password;
  data.username = username;
  data.role = role;

  await db.collection("creds").add(data);
  // cookieStore.set("username", username);
  // cookieStore.set("password", pass);

  let res = sendMail("account_success", {
    username: username,
    password: pass,
    email: email,
  });

  sendMail("password_reset",{
    email:email
  });
  if (res.err) {
    return {
      err: "Unexpected error occured",
    };
  } else {
    return {
      msg: "Account Creation Successful, Username and password sent to your registered email ID",
      username: username,
    };
  }

  // redirect("/dashboard/admin/success");
}
export async function logout() {
  try {
    const cookieStore = cookies();
    cookieStore.set("jwt", "", {
      httpOnly: true,
      maxAge: 0,
    });
    cookieStore.set("role", "", {
      httpOnly: true,
      maxAge: 0,
    });

    redirect("/login");
  } catch (e) {
    console.log(error);
    redirect("/login");
  }
}

export async function sendMail(type, body) {
  let template = "";
  let subject = "";
  console.log(body);
  switch (type) {
    case "account_success":
      var result = getAccountCreationSuccessTemplate(
        body.username,
        body.password
      );
      template = result.template;
      subject = result.subject;
      break;
    case "password_reset":
      var result = getOTPTemplate("123456");
      template = result.template;
      subject = result.subject;
      break;
  }

  const auth = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: "parvmultiservices@gmail.com",
      pass: process.env.LESS_SECURE_PASS,
    },
  });

  const receiver = {
    from: "parvmultiservices@gmail.com",
    to: body.email,
    subject: subject,
    html: template,
  };

  try {
    await auth.sendMail(receiver);
  } catch (e) {
    console.log(e);
    return {
      err: e,
    };
  }
  return {
    msg: "mail sent",
  };
}

export async function setLoanData(token, data, type) {
  let { decoded } = await checkAuthentication(token);
  console.log("decoded", decoded);
  console.log("data", JSON.stringify(data));
  if (decoded.role !== "Admin" && decoded.role !== "DSA") {
    return false;
  }

  const db = admin.firestore();
  let snapshot = await db.collection("personal_loans").get();
  let length = snapshot.size + 1;
  let loanData = getLoanType(type, length);
  data.status = "VERIFICATION";

  await db.collection(loanData.key).doc(loanData.value).set(data);

  console.log("loanData", loanData);
  return {
    loanID: loanData.value,
  };
}
