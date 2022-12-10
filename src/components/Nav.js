import React from 'react'
import {Link} from "react-router-dom"


const Nav = ({CategoryName,id}) => {
  return (
    <div className='Nav'>
        
        <a href={"/anycategory/"+id} >{CategoryName}</a>
    </div>
  )
}
/*<Link to={"/anycategory/"+id}>{CategoryName}</Link>*/

export default Nav
