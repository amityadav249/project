import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./component/Header"
import Navbar from './component/Navbar';
import Login from './component/login';
import Signup from './component/signup';

import About from './component/About';
import ProductListing from './component/productlisting';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='login' element={<Login />} />
          <Route path='Signup' element={<Signup />} />
          <Route path='About' element={<About />} />
          <Route path='productlisting' element={<ProductListing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App