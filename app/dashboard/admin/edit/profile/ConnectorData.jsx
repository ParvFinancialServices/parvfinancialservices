import { getConnectorsLoanData } from "@/api/file_action";
import { useState } from "react";
import { useEffect } from "react";
import { columns } from "./columns";
import { extractParticularField } from "@/lib/utils";
import Table from "@/comp/Table";
import { get } from "lodash";

const extractTableData = (data, list) => {
  let result = [];
  data.forEach((e) => {
    console.log(e);
    result.push({
      date: e.data.date,
      type: "Personal",
      loanid: e.id,
      name: get(e.data, `personal_details.sections[1].fields[0].value`),
      connector_name: get(e.data, list[1]),
      connector_id: get(e.data, list[0]),
      status: e.data.status,
      edit: "edit",
    });
  });
  console.log(result);
  return result;
};

export function ConnectorData({ username, user }) {
  const [data, setData] = useState({});
  const [filter, setFilter] = useState({});

  let list = [
    "info.sections[0].fields[0].value",
    "info.sections[0].fields[1].value",
    "type",
    "status",
  ];

  let filterData = [
    {
      id: "connector_id",
      value: ["all"],
    },
    {
      id: "connector_name",
      value: ["all"],
    },
    {
      id: "type",
      value: ["all"],
    },
    {
      id: "status",
      value: ["all"],
    },
  ];

  useEffect(() => {
    // console.log(user);
    user.getIdToken().then((token) => {
      getConnectorsLoanData(token, username).then((res) => {
        console.log(res);
        const result = extractTableData(res.data, list);
        let d = {
          connector_id: extractParticularField(list[0], res.data),
          connector_name: extractParticularField(list[1], res.data),
          type: extractParticularField(list[2], res.data),
          status: extractParticularField(list[3], res.data),
        };
        setData(result);
        setFilter(d);
      });
    });
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <Table
          columns={columns}
          data={data}
          filter={filter}
          filterData={filterData}
        />
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
