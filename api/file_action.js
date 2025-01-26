"use server";

import { v2 as sdk } from "cloudinary";
import db from "@/lib/firestore";
import { collection, addDoc } from "firebase/firestore";

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
