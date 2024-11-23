import React from 'react'
import {ArrowDownUpIcon} from 'lucide-react'
import {Button} from '@/components'

function Transactions() {
  return (
   <React.Fragment>
     <div>
      <div className='flex w-full items-center justify-between p-7'>
        <h1 className='text-2xl font-bold'>Transações</h1>

        <Button className='rounded-full'>
          <h4>Adicionar transação</h4>
          <ArrowDownUpIcon/>
        </Button>
      </div>
     </div>
   </React.Fragment>
  )
}

export {Transactions}