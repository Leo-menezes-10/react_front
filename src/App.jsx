
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Cart } from './pages/Cart'
import Login from './pages/Login'
import NavBar from './components/navBar'
import PrivateRoute from './routes/PrivateRoute'
import ReviewsAndFooter from './components/Footer'

const App = () => {
  return (
    <>
    <div className='bg-gray-100'>
      <NavBar/>
      <div>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute> }/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
          <ReviewsAndFooter/>


          
      </div>
    </div>
    </>
    
  )
}

export default App