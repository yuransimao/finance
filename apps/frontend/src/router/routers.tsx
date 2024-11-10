
import * as Pages from '../page'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function Routers() {
  return (
   <BrowserRouter>
   <Routes>
   <Route  path='/' element={<Pages.Login/>}/>
   <Route  path='/signup' element={<Pages.Signup/>}/>
   <Route  path='/Dashboard' element={<Pages.Dashboard/>}/>
    <Route  path='/subscription' element={<Pages.Subscription/>}/>
    <Route  path='/transactions' element={<Pages.Transactions/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export {Routers}