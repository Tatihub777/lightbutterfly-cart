import React from 'react'


import AllCategories from '../Filter/AllCategories';



const Navbar = () => {
  return (
   
    <nav className='navbar'>
       
        <div className='navbarContainer'>
        <h2>Lightbutterfly</h2> 
        </div>
       
        
        <div className='navbarCategories'>
      <AllCategories />
        </div>
      
        
     
      <div className='navCartIcon'>
       <span className="navQuantity">
        <span>3</span>
      </span> 
      <img className="cartIcon" alt='' src="https://img.icons8.com/?size=100&id=3337&format=png&color=000000"/>  
       
      </div>
    
    </nav>
    

  
  )
}

export default Navbar
