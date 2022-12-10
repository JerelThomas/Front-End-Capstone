import React from 'react'
import {Link} from "react-router-dom"
import Navlisting from './navlisting.js';
import {useState,useEffect } from "react";



const Header = () => {

  const [CategoryList,setCategoryList]=useState([]);
  
useEffect(()=>
{
  async function fetchCategory()
  {
      const response = await fetch (`${process.env.REACT_APP_BACK_END_URL}/api/user/category/get`)
      const apiResults =await response.json();

      setCategoryList(apiResults.message);
      console.log(apiResults.message);
  }
  fetchCategory();
},[]);



  return (


    
    
    <div id="Header_background">
      <div className="header">
        <h1><i class="fa fa-hippo"></i> <Link to="/">Shop HIPPO</Link></h1>
        <input type="text" id="search"/>
        <button type="submit">search</button>
              <div id="header_links">
                <Link to="/signup">sign up</Link>
                <Link to="/login">login in</Link>
              </div> 
              <div id="shoppingcart"><Link to=""><i class="fa fa-list" ></i></Link></div>
              
                 
              
      </div>
      <div className="Nav">
        <Link to="/product">ProductPage</Link>
        <Link to="/bestseller">BestSellerPage</Link>
        <Navlisting CategoryList={CategoryList}/>
      </div>
      
    </div>
  )
}

export default Header
