
import * as Pages from '@/page';
import * as Components from '@/components'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function Routers() {
  return (
   <BrowserRouter>
   <Routes>
   <Route  path='/' element={<Pages.Login/>}/>
   <Route  path='/signup' element={<Pages.Signup/>}/>
   
   <Route element={<Components.Layout />}>

   <Route  path='/dashboard' element={<Pages.Dashboard/>}/>
    <Route  path='/subscription' element={<Pages.Subscription/>}/>
    <Route  path='/transitions' element={<Pages.Transactions/>}/>
   </Route>
   </Routes>
   </BrowserRouter>
  )
}

export {Routers}