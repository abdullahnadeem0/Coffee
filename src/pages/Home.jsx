
import React from 'react'
import "./Home.css"
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import img3 from "../imgs/Banner 1.png"
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const Home = () => {
  return (
    <>
 <div className='home-head'>
     <div className='Location-div'>
        <h3 className='Location-name'>Location</h3>
         <h4 className='Location'>Bilzen, Tanjungbalai  <span className='Location-icon'><FaAngleDown /></span> 
 </h4>
     </div>

      <div className='home-search-contaner'>
        <div className='serach-bar'>
             <button className='serach-btn-home'><CiSearch /></button>
             <input type="text" placeholder='Serach coffee'  />
        </div>
        <button className='adjast-icon'><HiOutlineAdjustmentsHorizontal />
</button>
      </div>

    <div className='Buy-one-get'>
       {/* <img src={img3} alt="" /> */}
       <h1 className='Buy-one-get-heading'> Buy one get</h1>
       <h1 className='Buy-one-get-heading2'>  one FREE</h1>
    </div>

      <div className='filter-btns-All'>
         <button className='active filter-btns'>All Coffee</button>
         <button className=' filter-btns'>Machiato</button>
         <button className=' filter-btns'>Latte</button>
         <button className=' filter-btns'>Americano</button>

      </div>

        <div className='prodet-all-div'>
            <div className='prodet-card'></div>
            <div className='prodet-card'></div>
            <div className='prodet-card'></div>
            <div className='prodet-card'></div>

        </div>

 </div>
     
    </>
  )
}

export default Home