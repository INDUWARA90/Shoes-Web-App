import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Componets/auth/Login/Login'
import SignIn from './Componets/auth/SignIn/SignIn'
import Home from './Componets/Page/Home/Home'
import AdminDashBoard from './Componets/Page/AdminDashBoard/AdminDashBoard'
import ContactUs from './Componets/Page/Contact Us/ContactUs'
import Product from './Componets/Page/Products/Product'

function App() {

  return (
    <>
     <Routes>
      
          <Route path="/" element={<Login/>} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/admin-dashBoard" element={<AdminDashBoard/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/product" element={<Product/>} />
          
      </Routes>
    </>
  )
}

export default App
