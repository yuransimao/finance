import React from 'react'


import { ColumnsType } from './columnsType'
import {CircleIcon } from "lucide-react";
import { Transitions } from "@finace/core";


type ColumnstransictionsTypeProps = {
    transactions: Transitions; 
  };

export const ColumnstransictionsType =({transactions} : ColumnstransictionsTypeProps) => {
    if(transactions.type === "DEPOSIT"){
        return (<React.Fragment>
             <ColumnsType title="Deposito"
            textColor="text-primary"
            bg="bg-muted"
            icon={<CircleIcon size={10} className="fill-primary"/>}/>
        </React.Fragment>)
      }

      if(transactions.type === "EXPENSE"){
        return  <ColumnsType title="Gasto" 
        textColor="text-danger"
        bg="bg-danger bg-opacity-10"
        icon={<CircleIcon size={10} className="fill-danger"/>}/> 
      }

      return(
        <React.Fragment>
            <ColumnsType title="Ivenstimento"
            textColor="text-white"
            bg="bg-white bg-opacity-10"
            icon={<CircleIcon size={10} className="fill-white"/>}/>
        </React.Fragment> 
      )
}
