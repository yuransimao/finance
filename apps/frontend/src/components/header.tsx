import React from 'react'
import { Avatar, AvatarFallback, AvatarImage, Card } from './ui'
import Logo from '@/assets/logo.png'
import { NavLink } from 'react-router-dom'


function Header() {

  const LinkActive = ({ isActive }) => isActive ? "text-green-600 font-semibold" : "ease-in-out duration-500 hover:text-green-600  text-zinc-50 "
  const itemsNav = [
    {
      title: 'dashboard',
      to: '/dashboard'
    },
    {
      title: 'transações',
      to: '/transitions'
    },
    {
      title: 'assinatura',
      to: '/subscription'
    }
  ]
  return (
    <React.Fragment>
      <Card className='rounded-none  border-b'>
        <div className='p-7 flex items-center justify-between'>
          <div className='flex items-center gap-12'>
            <div className='flex items-center gap-2'>
              <img src={Logo} alt="logo" />
              <h3 className='text-2xl font-bold'>Finance.ai</h3>
            </div>

            <nav className='flex items-center gap-6'>

              {itemsNav.map((item, index) => (
                <NavLink to={item.to} className={LinkActive} key={index}>
                  <h4 className='capitalize text-sm'>{item.title}</h4>
                </NavLink>
              ))}

            </nav>
          </div>

          <Card className='py-2 px-3  rounded-xl'>
            <div className='flex items-center gap-4'>
              <Avatar className='w-7 h-7 '>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h5 className='text-sm font-semibold'>Yuran Simão</h5>
            </div>
          </Card>
        </div>
      </Card>
    </React.Fragment>
  )
}

export { Header }