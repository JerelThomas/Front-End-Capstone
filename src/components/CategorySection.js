import React from 'react'
import CategoryCard from './CategoryCard';
import {useState,useEffect } from "react";



const CategorySection = () => {

  const [AllCategoryList,setAllCategoryList]=useState([]);
  
useEffect(()=>
{
  async function fetchItem()
  {
      const response = await fetch (`${process.env.REACT_APP_BACK_END_URL}/api/user/category/get`)
      const apiResults =await response.json();

      setAllCategoryList(apiResults.message);
      console.log(apiResults.message);
  }
  fetchItem();
},[]);

  return (
    <div>
        <h2>CatagorySection</h2>
        <div className="default_grid">
          {AllCategoryList.slice(0,4).map((allCategoryList)=>(<CategoryCard key={allCategoryList.category_id} category_id={allCategoryList.category_id} item_name={allCategoryList.category_name}/>))}
        </div>

    </div>
  )
}

export default CategorySection
