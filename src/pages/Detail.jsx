import React from 'react'
 import "./Detail.css"
 import { FaAngleLeft } from "react-icons/fa6";
import { TiHeartOutline } from "react-icons/ti";
 import img5 from  "../imgs/Image.png"
import { RiEBike2Fill } from "react-icons/ri";
import { GiCoffeeBeans } from "react-icons/gi";
import { TfiPackage } from "react-icons/tfi";

const Detail = () => {
  return (
     <>
      <div className='Detail-navbar'> 
            <span className='Back-icon'> <FaAngleLeft /></span>
            <h2 className='Detail-titel'>Detail</h2>
            <span className='wislist-Detail'><TiHeartOutline /></span> </div>
      

          <div className='Detail-div'>

            <div className='Detail-main-img'>
                
                 <img src={img5} alt="" />
                </div> 

                 <h2 className='produt-Detail-titel'> Caffe Mocha</h2>

                 <div className='delivery'>
                    <p>Ice/Hot</p>
                     <div className='delivery-icon'>
                        <span className='delivery-icon-style'> <RiEBike2Fill /> </span>
                        <span className='delivery-icon-style'> <GiCoffeeBeans /> </span>
                        <span className='delivery-icon-style'> <TfiPackage /> </span>
                     </div>
                 </div>
                 <hr className='Detali-line' />

                 <h2 className='Description-titel'>Description</h2>
                  <p className='Description-para'>A cappuccino is an approximately 150 ml (5 oz)<br/> beverage, with 25 ml of espresso coffee and<br/> 85ml of fresh milk the fo..  <span className='bold-active'>Read More</span> </p>
         
                     <div className='Size'>
                         <h2 className='Size-titel'> Size</h2>
                        <div className='size-btn-all'>
                        <button>S</button>
                        <button className='Size-cative'>M</button>
                        <button>L</button>
                        </div>
                     </div>


                   
         
          </div>
                   <div className='spaces'></div>

             <div className='Detail-bar'>

                <div className='Price-prudet'>
                  <p>Price</p>
                  <h2> $ 4.53 </h2>
                </div>

                 <button className='Buy-Now'>Buy Now</button>

                        
                      </div>

     </>
  )
}

export default Detail