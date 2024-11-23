
import { Transitions } from "@finace/core";
import { ColumnDef } from "@tanstack/react-table"

import {ColumnstransictionsType} from './columnstransictionsType'



export const Transitionscolumns: ColumnDef<Transitions>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({row:{original: transactions}}) => <ColumnstransictionsType  transactions={transactions}/>
   
  
    
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "Metodo de pagamento",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "actions",
    header: " ",
  },
]
