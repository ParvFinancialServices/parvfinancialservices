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
import { where } from "@firebase/firestore";
import { checkAuthentication } from "./file_action";

sdk.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

let app;

export async function getEmployeeDetails(token, role) {
    const cookieStore = cookies();
    let { decoded } = await checkAuthentication(token);
    if (decoded.role !== "Admin") {
        return false;
    }
    const employeeData = [];
    const db = admin.firestore();
    // const role = get(data, "info.sections[1].fields[0].value");
    let snapshot = await db.collection("creds").where('role', "==", role).get();
    
    let length = snapshot.size + 1;
    if (length < 0) {
        return {
            success: true, employeeData
        }
    }
    snapshot.forEach((data) => {
        employeeData?.push(data.data())
    });
    return {
        success: true, employeeData
    }
};

export async function GetEmployeeById(token, userId) {
    const cookieStore = cookies();
    let { decoded } = await checkAuthentication(token);
    console.log("decoded", decoded);
    // console.log("data", JSON.stringify(data));
    if (decoded.role !== "Admin") {
        return false;
    }
    const employeeData = [];
    const db = admin.firestore();
    // const role = get(data, "info.sections[1].fields[0].value");
    let snapshot = await db.collection("creds").where('username', "==", userId).get();
    let length = snapshot.size + 1;
    if (length < 0) {
        return {
            success: true, employeeData
        }
    }
    snapshot.forEach((data) => {
        employeeData?.push(data.data())
    });
    return {
        success: true, employeeData
    }
}