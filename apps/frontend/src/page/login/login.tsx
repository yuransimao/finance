import React from 'react'
import Logo from  '@/assets/logo.png'
import Bgogin from '@/assets/background-login.png'
import { Form } from './components'
function Login() {

  return (
    <React.Fragment>
      <div className='h-svh grid grid-cols-2 w-full '>
        <div className='flex flex-col justify-center p-8 max-w-[550px] space-y-8 mx-auto'>
         
            <div className='logo flex items-center gap-3'>
            <span><img src={Logo} alt="logo" /></span>
            <h2 className='font-bold text-2xl'>finance.ai</h2>
            </div>
              <div className='space-y-3'>
                <h3 className='font-bold text-4xl'>Bem-vindo</h3>
                <p className='font-normal  text-sm text-muted-foreground'>A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.</p>

            </div>
          
         <Form/>

        </div>

        <div className=' relative w-full h-full bg-white overflow-hidden'>

          <img src={Bgogin} alt="bg"  className='h-full w-full object-cover'/>

        </div>
      </div>
    </React.Fragment>
  )
}

export { Login }