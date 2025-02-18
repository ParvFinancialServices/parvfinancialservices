"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { makeSelectableState } from "@/lib/utils";
import { FilterIcon } from "lucide-react";

function Filter({ column, filter, setFilter }) {
  return (
    <div className="relative overflow-visible filter-element">
      <label className="relative h-fit w-fit" htmlFor={filter[column.id].value}>
        <input
          type="checkbox"
          id={filter[column.id].value}
          className="peer hidden"
        />
        <FilterIcon className="relative h-[15px] w-[15px]" />
        {/* <Ellipsis className="relative h-fit w-fit" /> */}

        <div className="peer-checked:flex hidden absolute left-0 items-stretch  bg-white flex-col  border rounded-sm">
          {filter[column.id] &&
            filter[column.id].map((elem, ind) => (
              <Label key={elem.value} className="flex items-center hover:bg-gray-300 px-4 py-2 gap-2">
                <input
                  type="checkbox"
                  checked={elem.isChecked}
                  onChange={(e) => {
                    if (e.target.checked) {
                      if (column.getFilterValue() !== undefined) {
                        let val = column.getFilterValue();
                        column.setFilterValue([...val, elem.value]);
                      } else {
                        column.setFilterValue([elem.value]);
                      }

                      setFilter((state) => {
                        state[column.id][ind].isChecked = true;
                        return state;
                      });
                    } else {
                      if (column.getFilterValue() !== undefined) {
                        let val = column.getFilterValue();
                        val.splice(val.indexOf(elem.value), 1);
                        column.setFilterValue([...val]);
                      } else {
                        // column.setFilterValue([val]);
                      }

                      setFilter((state) => {
                        state[column.id][ind].isChecked = false;
                        return state;
                      });
                    }
                  }}
                />
                <p className="min-w-max">
                {elem.value}
                </p>
              </Label>
            ))}
        </div>
      </label>
    </div>
  );
}

export function DataTable({ columns, data, filter }) {

  const [columnFilters, setColumnFilters] = useState([
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
  ]);
  const [filterState, setFilterState] = useState([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    enableColumnFilters: true,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // debugTable: true,
    // debugHeaders: true,
    // debugColumns: false,
  });

  useState(() => {
    setFilterState(makeSelectableState(filter));
  }, []);
  return (
    <div className="rounded-md border">
      <Table id="myTable">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    <div className="flex flex-row items-center gap-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {header.column.getCanFilter() ? (
                        <Filter
                          column={header.column}
                          filter={filterState}
                          setFilter={setFilterState}
                        />
                      ) : null}
                    </div>
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
