import React from 'react';
import AnyCategoryCard from '../components/AnyCategoryCard';
import {useState,useEffect } from "react";
import {useParams} from "react-router-dom";

const AnyCategoryPage = () => {

  const params=useParams();

  const [ItemList,setItemList]=useState([]);
  
  useEffect(()=>
  {
    async function fetchItem()
    {
        const response = await fetch (`${process.env.REACT_APP_BACK_END_URL}/api/user/item?category_id=`+params.id)
        const apiResults =await response.json();
  
        setItemList(apiResults.data);
        console.log(apiResults.data);
    }
    fetchItem();
  },[]);
  

  return (
    <div className="Page_height">
      
      {ItemList.map(itemList=>(<AnyCategoryCard key={itemList.stored_items_id} id={itemList.stored_items_id} CategoryId={params.id} item_name={itemList.name}/>))}

    </div>
  )
}



export default AnyCategoryPage
