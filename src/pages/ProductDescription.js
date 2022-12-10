import React from 'react'
import ProductDescriptioncard from '../components/ProductDescriptioncard'
import {useState,useEffect } from "react";
import {useParams} from "react-router-dom";


const ProductDescription = () => {

  const params=useParams();

  const [ItemList,setItemList]=useState([]);
  
  useEffect(()=>
  {
    async function fetchItem()
    {
        const response = await fetch (`${process.env.REACT_APP_BACK_END_URL}/api/user/item/`+params.id)
        const apiResults =await response.json();
  
        setItemList(apiResults.item);
        console.log(apiResults.item);
        
    }
    fetchItem();
  },[]);


  return (
    <div className="Page_height">
      <ProductDescriptioncard name={ItemList.name} Description={ItemList.product_description} price={ItemList.price} quantity={ItemList.quantity}/>
    </div>
  )
}

export default ProductDescription
