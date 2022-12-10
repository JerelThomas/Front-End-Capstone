import React from 'react'
import Bestsellercard from "./bestsellercard"
import {useState,useEffect } from "react";


const BestSellerSection = () => {

  const [AllBestSellerList,setAllBestSellerList]=useState([]);
  
  useEffect(()=>
  {
    async function fetchItem()
    {
        const response = await fetch (`${process.env.REACT_APP_BACK_END_URL}/api/user/itembestseller?best_seller=true`)
        const apiResults =await response.json();
  
        setAllBestSellerList(apiResults.data);
        console.log(apiResults.data);
    }
    fetchItem();
  },[]);

  return (
    <div>
            <h2>BestSellerSection</h2>
            <div className="default_grid">
                          {AllBestSellerList.slice(0,4).map(allBestSellerList=>(<Bestsellercard key={allBestSellerList.stored_items_id} id={allBestSellerList.stored_items_id} item_name={allBestSellerList.name}/>))}
            </div>
    </div>
  )
}

export default BestSellerSection
