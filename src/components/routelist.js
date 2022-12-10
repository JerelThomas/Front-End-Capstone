import React from 'react'
import{Routes,Route} from "react-router-dom";
import HomePage from "../pages/HomePage.js";
import Signup from "../pages/signup.js";
import Login from "../pages/login.js";
import ProductPage from "../pages/ProductPage.js";
import BestsellerPage from "../pages/BestsellerPage.js";
import AnyCategoryPage from '../pages/AnyCategoryPage.js';
import ProductDescription from '../pages/ProductDescription.js';
import "../assests/css/section.css"


const routelist = () => {
  return (
    <div>
    <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/bestseller" element={<BestsellerPage/>}/>
        <Route path="/anycategory/:id" element={<AnyCategoryPage/>}/>
        <Route path="/description/:id" element={<ProductDescription/>}/>



    </Routes>
    </div>
  )
}

export default routelist
