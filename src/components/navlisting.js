import React from 'react'
import Nav from "../components/Nav.js";

const navlisting = ({CategoryList}) => {
  return (
    <div>
    
    {CategoryList.map(categorylist=>(<Nav key={categorylist.category_id} id={categorylist.category_id} CategoryName={categorylist.category_name} />))} 
    
    </div>
  )
}

export default navlisting
