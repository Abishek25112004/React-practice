import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        
      <ul style={{display:"flex" , padding:"10px", alignItems:"center", backgroundColor:"deeppink" , color:"aliceblue"}}>
        
       <li style={{marginLeft:"5px"}}><Link to="/" >Home</Link></li> 
        <li style={{marginLeft:"15px"}}><Link to="/user" >User</Link></li>
        <li style={{marginLeft:"15px"}}><Link to="/about" >About</Link></li>
        <li style={{marginLeft:"15px"}}><Link to="/contact" >Contact</Link>
</li>
      </ul>

    </nav>
  )
}

export default Navbar
