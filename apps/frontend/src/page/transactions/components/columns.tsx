
import { Transitions } from "@finace/core";
import { ColumnDef } from "@tanstack/react-table"



export const columns: ColumnDef<Transitions>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]
