"use client";
import { DataTable } from "@/comp/DataTable";
import { columns } from "./columns";
import { getLoanData } from "@/api/file_action";
import { useEffect } from "react";
import { useState } from "react";
import { extractTableData } from "@/lib/utils";
import app from "@/lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { useAdminState } from "@/app/dashboard/store";

export default function Page() {
  const AdminState = useAdminState();
  let [data, setData] = useState([]);
  let list = [
    "info.sections[0].fields[1].value",
    "info.sections[0].fields[2].value",
    "personal_details.sections[1].fields[0].value",
  ];

  useEffect(function () {
    if (typeof window !== "undefined") {
      // async function getData() {
      //   let token = AdminState.user.getIdToken();
      //   return getLoanData(token, "Personal")
      //     .then((res) => {
      //       setData(extractTableData(res.data, list, "Personal"));
      //       console.log(data);
      //     })
      //     .catch((err) => {
      //       if (err.includes("Firebase ID token has expired")) {
      //         const auth = getAuth(app);
      //         const token = auth.get;
      //       }
      //     });
      // }

      AdminState.user.getIdToken().then(async (token) => {
        const res = await getLoanData(token, "Personal");
        const result = extractTableData(res.data, list, "Personal");
        setData(result);
        console.log(result);
      });
    }
  }, []);

  // type of loan
  // loan ID
  // name
  // date
  // connector name
  // connector ID
  // view/edit

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
