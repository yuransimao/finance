import React from 'react'
import { Avatar, AvatarFallback, AvatarImage, Card } from './ui'
import { Nav } from './nav'
import Logo from '@/assets/logo.png'


function Header() {


  return (
    <React.Fragment>
      <Card className='rounded-none  border-b'>
        <div className='p-7 flex items-center justify-between'>
          <div className='flex items-center gap-12'>
            <div className='flex items-center gap-2'>
              <img src={Logo} alt="logo" />
              <h3 className='text-2xl font-bold'>Finance.ai</h3>
            </div>

            <Nav/> 
          </div>

          <Card className='py-2 px-3  rounded-xl'>
            <div className='flex items-center gap-4'>
              <Avatar className='w-7 h-7 '>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h5 className='text-xs font-semibold'>Yuran Simão</h5>
            </div>
          </Card>
        </div>
      </Card>
    </React.Fragment>
  )
}

export { Header }