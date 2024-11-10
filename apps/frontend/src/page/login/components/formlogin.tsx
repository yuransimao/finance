import React from 'react'
import {Input, Button} from "@/components"
import { LogIn } from 'lucide-react'

function FormLogin() {
  return (
    <React.Fragment>
        <form  className='space-y-4'>
        <Input type="email" placeholder="Email" className='p-6 rounded-md'/>
        <Input type="password" placeholder="Password"  className='p-6 rounded-md'/>
        <Button variant='outline' className='rounded-md'>
            <span><LogIn/></span>
            <h3>Entrar</h3>
        </Button>
        </form>
    </React.Fragment>
  )
}

export {FormLogin}