"use server";

import { v2 as sdk } from "cloudinary";
import * as admin from "firebase-admin";
import * as jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import crypto from "crypto";

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

export async function login(username, password) {
  let app;
  let profile;

  // Initialising the firebase app using serviceAccountCredentials
  try {
    const serviceAccountCredentials = JSON.parse(process.env.KEY);
    app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccountCredentials),
    });
  } catch (error) {
    console.log(error);
    app = admin.app();
  }

  const auth = app.auth();
  const db = app.firestore();

  // getting profile details
  let query = db.collection("cred").where("username", "==", username);
  let snapshot = await query.get();
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
      crypto;
      // Creating a temporary token to sign in the user so that we can use the role inside security rules
      const token = await auth.createCustomToken(
        "d8ad2d85-9416-4451-9ded-75f40a96d4c5",
        {
          role: profile.role,
        }
      );
      cookieStore.set("jwt", string, {
        httpOnly: true,
      });
      cookieStore.set("role", profile.role, {
        httpOnly: true,
      });
      return { token, profile };
    } catch (error) {
      return { error };
    }
  } else {
    return { error: "Username or password is incorrect" };
  }
}
