import React from 'react'
import ProductCard from '../components/ProductCard'
import {useState,useEffect } from "react";


const ProductPage = () => {


  const [AllItemList,setAllItemList]=useState([]);
  
  useEffect(()=>
  {
    async function fetchItem()
    {
        const response = await fetch (`${process.env.REACT_APP_BACK_END_URL}/api/user/item`)
        const apiResults =await response.json();
  
        setAllItemList(apiResults.message);
        console.log(apiResults.message);
    }
    fetchItem();
  },[]);
  
  return (
    <div  className="Page_height">
      {AllItemList.map(allItemList=>(<ProductCard key={allItemList.stored_items_id} id={allItemList.stored_items_id} item_name={allItemList.name}/>))}

    </div>
  )
}

export default ProductPage


