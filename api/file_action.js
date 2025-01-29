"use server";

import { v2 as sdk } from "cloudinary";
import { FirebaseError } from "firebase/app";
import * as admin from "firebase-admin";
import * as jwt from "jsonwebtoken";
// import Cred from "@/key.json";
import { cookies } from "next/headers";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MESAUREMENT_ID,
};
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

// function getApp() {
//   let app;
//   try {
//     // console.log(Cred);
//     const Cred = JSON.parse(process.env.Key);
//     console.log("Cred", Cred);
//     app = admin.initializeApp({
//       credential: admin.credential.cert(Cred),
//     });
//   } catch (error) {
//     app = admin.app();
//   }
//   // console.log("app",app);
//   return app;
// }

export async function login(username, password) {
  let app;
  try {
    // console.log(Cred);
    const Cred = JSON.parse(process.env.KEY);
    console.log("Cred", Cred);
    app = admin.initializeApp({
      credential: admin.credential.cert(Cred),
    });
  } catch (error) {
    console.log(error);
    app = admin.app();
  }

  // console.clear();

  console.log(username, password);
  // const app = getApp();
  const auth = app.auth();

  const db = app.firestore();
  let cred;
  let query = db.collection("cred").where("username", "==", username);
  let snapshot = await query.get();
  snapshot.forEach(async (doc) => {
    cred = doc.data();
    console.log(cred);
    if (cred.password == password) {
      try {
        const cookieStore = await cookies();
        let string = jwt.sign(
          {
            username: cred.username,
            role: cred.role,
          },
          "salt123"
        );
        console.log("string", string);
        const token = await auth.createCustomToken(
          "d8ad2d85-9416-4451-9ded-75f40a96d4c5",
          {
            role: cred.role,
          }
        );

        console.log("token", token);
        cookieStore.set("jwt", jwt, {
          httpOnly: true,
        });
        return { token, cred };
      } catch (error) {
        return { error };
      }
    } else {
      return { error: "Username or password is incorrect" };
    }
  });
}
