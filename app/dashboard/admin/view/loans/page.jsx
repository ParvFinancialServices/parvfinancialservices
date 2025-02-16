"use client";
import { DataTable } from "@/comp/DataTable";
import { columns } from "./columns";
import { getLoanData, sendMail } from "@/api/file_action";
import { useEffect } from "react";
import { useState } from "react";
import { extractParticularField, extractTableData } from "@/lib/utils";
import { useUserState } from "@/app/dashboard/store";
import Table from "@/comp/Table";
import { Button } from "@/components/ui/button";

export default function Page() {
  const userState = useUserState();
  let [data, setData] = useState([]);
  let [filterData, setFilterData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let list = [
    "info.sections[0].fields[1].value",
    "info.sections[0].fields[2].value",
    "personal_details.sections[1].fields[0].value",
  ];

  useEffect(() => {
    userState.user.getIdToken().then((token) => {
      console.log(token);
      getLoanData(token, "Personal").then((res) => {
        console.log(res);
        const result = extractTableData(res.data, list, "Personal");
        let d = {
          connector_id: extractParticularField(list[0], res.data),
          connector_name: extractParticularField(list[1], res.data),
          type: extractParticularField(list[2], res.data),
        };
        console.log(result);
        console.log(d);
        setData(result);
        setFilterData(d);
        setIsLoading(false);
      });
    });
  }, []);

  // type of loan
  // loan ID
  // name
  // date
  // connector name
  // connector ID
  // view/edit

  function exportTableToExcel(tableId) {
    // Get the table element using the provided ID
    const table = document.getElementById(tableId).cloneNode(true);
    const filterElements = table.querySelectorAll(".filter-element");
    console.log(filterElements);
    filterElements.forEach((e) => {
      console.log(e);
      e.parentElement.removeChild(e);
    });

    // Extract the HTML content of the table
    const html = table.outerHTML;
    console.log(html);

    // Create a Blob containing the HTML data with Excel MIME type
    const blob = new Blob([html], { type: "application/vnd.ms-excel" });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element for downloading
    const a = document.createElement("a");
    a.href = url;

    // Set the desired filename for the downloaded file
    a.download = "table.xls";

    // Simulate a click on the anchor to trigger download
    a.click();

    // Release the URL object to free up resources
    URL.revokeObjectURL(url);
  }

  // Attach the function to the export button's click event
  // document.getElementById('exportButton').addEventListener('click', function() {
  //   exportTableToExcel('tableId');
  // });

  return (
    <div className="container mx-auto p-4 flex flex-col gap-2">
      <div className="flex items-center justify-end">
        <Button className="w-fit" onClick={() => exportTableToExcel("myTable")}>
          Download
        </Button>
        <Button
          onClick={async () => {
            let { msg } = await sendMail();
            console.log(msg);
          }}
        >
          send mail
        </Button>
      </div>
      {!isLoading ? (
        <Table columns={columns} data={data} filter={filterData} />
      ) : (
        <p>loading..</p>
      )}
    </div>
  );
}
