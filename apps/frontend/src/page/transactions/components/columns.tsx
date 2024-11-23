
import { Transitions } from "@finace/core";
import { ColumnDef } from "@tanstack/react-table"

import {ColumnstransictionsType} from './columnstransictionsType'
import { Button } from "@/components";
import { PencilIcon, TrashIcon } from "lucide-react";


const TRANSACTION_CATEGORY_LABEL= {
  EDUCATION: "Educação",
  HOUSING: "Casa",
  TRANSPORTATION: "Transporte",
  ENTERTAINMENT: "Entretenimento",
  HEALTH: "Saúde",
  UTILITY: "Utilidade",
  SALARY: "Salário",
  FOOD: "Alimentação",
  OTHER: "Outros",
}

const TRANSACTION_PAYMENT_METHOD_LABEL ={
  CREDIT_CARD: "Cartão de crédito",
  DEBIT_CARD: "Cartão de débito",
  BANK_TRANSFER: "Transferência bancária",
  BANK_SLIP: "Recibo bancário",
  CASH: "Dinheiro",
  PIX: "Pix",
  OTHER: "Outro",
}
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
    cell: ({row:{original: transactions}}) => TRANSACTION_CATEGORY_LABEL[transactions.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Metodo de pagamento",
    cell: ({row:{original: transactions}}) => TRANSACTION_PAYMENT_METHOD_LABEL[transactions.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({row:{original: transactions}}) =>(
      new Date(transactions.date).toLocaleDateString('pt-AO', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      })
    )
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({row:{original: transactions}}) =>(
      new Intl.NumberFormat("pt-AO",{
        style: "currency",
        currency: "AOA",
      }).format(Number(transactions.amount))
    )
  },
  {
    accessorKey: "actions",
    header: "Acções",
    cell: () =>(
      <div className="space-x-1">
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <PencilIcon/>
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <TrashIcon/>
        </Button>
      </div>
    )
  },
]
