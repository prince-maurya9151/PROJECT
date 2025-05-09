import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from "./landing_page/signup/Signup"
import AboutPage from "./landing_page/about/AboutPage"
import ProductPage from "./landing_page/products/ProductPage"
import PricingPage from "./landing_page/Pricing/PricingPage"
import SupportPage from "./landing_page/support/SupportPage"
import NavBar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <span>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/product' element={<ProductPage/>}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/support' element={<SupportPage/>}/>
    <Route path='/*' element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </span>
);