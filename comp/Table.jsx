import { DataTable } from "./DataTable";

export default function Table({ data, columns, filter }) {
  return <DataTable columns={columns} data={data} filter={filter} />;
}
