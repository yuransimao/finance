import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    const LinkActive = ({ isActive }) => isActive ? "text-green-600 font-semibold" : "ease-in-out duration-500 hover:text-green-600  text-zinc-50 ";

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
      }]  
      
    return (
        <React.Fragment>
            <nav className='flex items-center gap-6'>

                {itemsNav.map((item, index) => (
                    <NavLink to={item.to} className={LinkActive} key={index}>
                        <h4 className='capitalize text-sm'>{item.title}</h4>
                    </NavLink>
                ))}

            </nav>
        </React.Fragment>
    )
}

export { Nav }