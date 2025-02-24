"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { multiValueFilter } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

export const columns = [
  {
    accessorKey: "type",
    header: "Type",
    enableColumnFilter: true,
    filterFn: multiValueFilter,
  },
  {
    accessorKey: "loanid",
    header: "Loan ID",
    enableColumnFilter: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    enableColumnFilter: false,
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("date")}</div>,
    enableColumnFilter: false,
  },
  {
    accessorKey: "connector_id",
    header: "Connector's ID",
    enableColumnFilter: true,
    filterFn: multiValueFilter,
  },
  {
    accessorKey: "connector_name",
    header: "Connector's Name",
    enableColumnFilter: true,
    filterFn: multiValueFilter,
  },
  {
    accessorKey: "status",
    header: "Status",
    enableColumnFilter: true,
    filterFn: multiValueFilter,
    cell: ({ row }) => <Badge>{row.original.status}</Badge>,
  },
  {
    id: "edit",
    enableHiding: false,
    cell: ({row}) => {
      console.log(row?.original);
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href={`/dashboard/admin/view/${row?.original?.loanid}?loanId=${row?.original?.loanid}`}>
                View
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    enableColumnFilter: false,
  },
];
