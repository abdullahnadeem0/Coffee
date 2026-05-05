
import React from 'react'
import "./Home.css"
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import img3 from "../imgs/Banner 1.png"
import img4 from "../imgs/2.png"
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";


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
            <div className='prodet-card'>

                 <div className='prodet-card-img'>
                <img src={img4} alt="" />
                <div className='reating-div'>
                   
                    <div className='reating-div-contant'>


                         <span className='active-icon'> <FaStar /></span> <h3 className='reating-number'> 4.8</h3> 
                    </div>
                </div>

                 </div>
                
                <h2 className='prodet-card-heading'>Caffe Mocha</h2>
                <p className='prodet-card-datial'>Deep Foam</p>
                <div className='price-cart-div'> <h2>$ 4.53</h2> <button>+</button></div>

                </div>
             
              <div className='prodet-card'>

                 <div className='prodet-card-img'>
                <img src={img4} alt="" />
                <div className='reating-div'>
                   
                    <div className='reating-div-contant'>


                         <span className='active-icon'> <FaStar /></span> <h3 className='reating-number'> 4.8</h3> 
                    </div>
                </div>

                 </div>
                
                <h2 className='prodet-card-heading'>Caffe Mocha</h2>
                <p className='prodet-card-datial'>Deep Foam</p>
                <div className='price-cart-div'> <h2>$ 4.53</h2> <button>+</button></div>

                </div>
                 <div className='prodet-card'>

                 <div className='prodet-card-img'>
                <img src={img4} alt="" />
                <div className='reating-div'>
                   
                    <div className='reating-div-contant'>


                         <span className='active-icon'> <FaStar /></span> <h3 className='reating-number'> 4.8</h3> 
                    </div>
                </div>

                 </div>
                
                <h2 className='prodet-card-heading'>Caffe Mocha</h2>
                <p className='prodet-card-datial'>Deep Foam</p>
                <div className='price-cart-div'> <h2>$ 4.53</h2> <button>+</button></div>

                </div>
                 <div className='prodet-card'>

                 <div className='prodet-card-img'>
                <img src={img4} alt="" />
                <div className='reating-div'>
                   
                    <div className='reating-div-contant'>


                         <span className='active-icon'> <FaStar /></span> <h3 className='reating-number'> 4.8</h3> 
                    </div>
                </div>

                 </div>
                
                <h2 className='prodet-card-heading'>Caffe Mocha</h2>
                <p className='prodet-card-datial'>Deep Foam</p>
                <div className='price-cart-div'> <h2>$ 4.53</h2> <button>+</button></div>

                </div>
                 <div className='prodet-card'>

                 <div className='prodet-card-img'>
                <img src={img4} alt="" />
                <div className='reating-div'>
                   
                    <div className='reating-div-contant'>


                         <span className='active-icon'> <FaStar /></span> <h3 className='reating-number'> 4.8</h3> 
                    </div>
                </div>

                 </div>
                
                <h2 className='prodet-card-heading'>Caffe Mocha</h2>
                <p className='prodet-card-datial'>Deep Foam</p>
                <div className='price-cart-div'> <h2>$ 4.53</h2> <button>+</button></div>

                </div>
                 <div className='prodet-card'>

                 <div className='prodet-card-img'>
                <img src={img4} alt="" />
                <div className='reating-div'>
                   
                    <div className='reating-div-contant'>


                         <span className='active-icon'> <FaStar /></span> <h3 className='reating-number'> 4.8</h3> 
                    </div>
                </div>

                 </div>
                
                <h2 className='prodet-card-heading'>Caffe Mocha</h2>
                <p className='prodet-card-datial'>Deep Foam</p>
                <div className='price-cart-div'> <h2>$ 4.53</h2> <button>+</button></div>

                </div>
                 <div className='prodet-card'>

                 <div className='prodet-card-img'>
                <img src={img4} alt="" />
                <div className='reating-div'>
                   
                    <div className='reating-div-contant'>


                         <span className='active-icon'> <FaStar /></span> <h3 className='reating-number'> 4.8</h3> 
                    </div>
                </div>

                 </div>
                
                <h2 className='prodet-card-heading'>Caffe Mocha</h2>
                <p className='prodet-card-datial'>Deep Foam</p>
                <div className='price-cart-div'> <h2>$ 4.53</h2> <button>+</button></div>

                </div>
                 <div className='prodet-card'>

                 <div className='prodet-card-img'>
                <img src={img4} alt="" />
                <div className='reating-div'>
                   
                    <div className='reating-div-contant'>


                         <span className='active-icon'> <FaStar /></span> <h3 className='reating-number'> 4.8</h3> 
                    </div>
                </div>

                 </div>
                
                <h2 className='prodet-card-heading'>Caffe Mocha</h2>
                <p className='prodet-card-datial'>Deep Foam</p>
                <div className='price-cart-div'> <h2>$ 4.53</h2> <button>+</button></div>

                </div>
                 <div className='prodet-card'>

                 <div className='prodet-card-img'>
                <img src={img4} alt="" />
                <div className='reating-div'>
                   
                    <div className='reating-div-contant'>


                         <span className='active-icon'> <FaStar /></span> <h3 className='reating-number'> 4.8</h3> 
                    </div>
                </div>

                 </div>
                
                <h2 className='prodet-card-heading'>Caffe Mocha</h2>
                <p className='prodet-card-datial'>Deep Foam</p>
                <div className='price-cart-div'> <h2>$ 4.53</h2> <button>+</button></div>

                </div> <div className='prodet-card'>

                 <div className='prodet-card-img'>
                <img src={img4} alt="" />
                <div className='reating-div'>
                   
                    <div className='reating-div-contant'>


                         <span className='active-icon'> <FaStar /></span> <h3 className='reating-number'> 4.8</h3> 
                    </div>
                </div>

                 </div>
                
                <h2 className='prodet-card-heading'>Caffe Mocha</h2>
                <p className='prodet-card-datial'>Deep Foam</p>
                <div className='price-cart-div'> <h2>$ 4.53</h2> <button>+</button></div>

                </div>
                 <div className='prodet-card'>

                 <div className='prodet-card-img'>
                <img src={img4} alt="" />
                <div className='reating-div'>
                   
                    <div className='reating-div-contant'>


                         <span className='active-icon'> <FaStar /></span> <h3 className='reating-number'> 4.8</h3> 
                    </div>
                </div>

                 </div>
                
                <h2 className='prodet-card-heading'>Caffe Mocha</h2>
                <p className='prodet-card-datial'>Deep Foam</p>
                <div className='price-cart-div'> <h2>$ 4.53</h2> <button>+</button></div>

                </div>
                 <div className='prodet-card'>

                 <div className='prodet-card-img'>
                <img src={img4} alt="" />
                <div className='reating-div'>
                   
                    <div className='reating-div-contant'>


                         <span className='active-icon'> <FaStar /></span> <h3 className='reating-number'> 4.8</h3> 
                    </div>
                </div>

                 </div>
                
                <h2 className='prodet-card-heading'>Caffe Mocha</h2>
                <p className='prodet-card-datial'>Deep Foam</p>
                <div className='price-cart-div'> <h2>$ 4.53</h2> <button>+</button></div>

                </div>
                 <div className='prodet-card'>

                 <div className='prodet-card-img'>
                <img src={img4} alt="" />
                <div className='reating-div'>
                   
                    <div className='reating-div-contant'>


                         <span className='active-icon'> <FaStar /></span> <h3 className='reating-number'> 4.8</h3> 
                    </div>
                </div>

                 </div>
                
                <h2 className='prodet-card-heading'>Caffe Mocha</h2>
                <p className='prodet-card-datial'>Deep Foam</p>
                <div className='price-cart-div'> <h2>$ 4.53</h2> <button>+</button></div>

                </div>
                 <div className='prodet-card'>

                 <div className='prodet-card-img'>
                <img src={img4} alt="" />
                <div className='reating-div'>
                   
                    <div className='reating-div-contant'>


                         <span className='active-icon'> <FaStar /></span> <h3 className='reating-number'> 4.8</h3> 
                    </div>
                </div>

                 </div>
                
                <h2 className='prodet-card-heading'>Caffe Mocha</h2>
                <p className='prodet-card-datial'>Deep Foam</p>
                <div className='price-cart-div'> <h2>$ 4.53</h2> <button>+</button></div>

                </div>

        </div>
<div className='spaces'></div>


 </div>
     <div className='bottom-home-bar'>
     <div className='bottom-bar-home'>
         <div className='icon-bottom-bar-home'>
            <span className='active-icon-bar menu-icon-bottom'><GoHomeFill /></span>
            <span className='menu-icon-bottom'><FaRegHeart /></span>
            <span className='menu-icon-bottom'><IoBagOutline /></span>
            <span className='menu-icon-bottom'><FaRegBell /></span>
         </div>
     </div>
     </div>
    </>
  )
}

export default Home