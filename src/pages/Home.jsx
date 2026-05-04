
import React from 'react'
import "./Home.css"
import { FaAngleDown } from "react-icons/fa";

const Home = () => {
  return (
    <>
 <div className='home-head'>
     <div className='Location-div'>
        <h3 className='Location-name'>Location</h3>
         <h4 className='Location'>Bilzen, Tanjungbalai  <span className='Location-icon'><FaAngleDown /></span> 
 </h4>
     </div>
 </div>
     
    </>
  )
}

export default Home