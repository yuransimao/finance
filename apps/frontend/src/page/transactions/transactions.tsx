import React from 'react'
import {ArrowDownUpIcon} from 'lucide-react'
import {Button, DataTable} from '@/components'
import {  Transitionscolumns } from './components/columns'

function Transactions() {

  const dataTransitions = [
    {
      id: "728ed52f",
      name:'Yuran',
      amount: 100,
      type:'DEPOSIT',
      category:'HOUSING',
      paymentMethod: 'CREDIT_CARD',
      date: Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      
    },
    {
      id: "489e1d42",
      amount: 125,
      name:'Yuran',
      type:'EXPENSE',
      category:'TRANSPORTATION',
      paymentMethod: 'BANK_TRANSFER',
      date: Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: "489e1d42",
      amount: 125,
      name:'Apnotec',
      type:'INVESTMENT',
      category:'ENTERTAINMENT',
      paymentMethod: 'BANK_TRANSFER',
      date: Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    
  ]
  
  return (
   <React.Fragment>
     <div className='p-7 space-y-6'>
      <div className='flex w-full items-center justify-between '>
        <h1 className='text-2xl font-bold'>Transações</h1>

        <Button className='rounded-full'>
          <h4>Adicionar transação</h4>
          <ArrowDownUpIcon/>
        </Button>
      </div>

      <DataTable columns={Transitionscolumns} data={dataTransitions}/>
     </div>
   </React.Fragment>
  )
}

export {Transactions}