import Table from "@/comp/Table";
import { telecallerDataColumns } from "./columns";

export default function TelecallerData({ assignments }) {
  return (
    <div className="flex w-full">
      <Table
        columns={telecallerDataColumns}
        data={assignments}
        filter={{}}
        filterData={{}}
      />
    </div>
  );
}
