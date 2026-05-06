
  import React from 'react'
  import { FaAngleLeft } from "react-icons/fa6";
import "./Order.css"
import { FaEdit } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import img6 from"../imgs/3.png"
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { LuWallet } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";



  const Order = () => {
    return (
        <>
         <div className='order-header'>
             <span className='order-header-icon'> <FaAngleLeft /></span>
             <h2>Order</h2>
         </div>


  <div className='order-main-datal'>

         <div className='order-top-btn'>
            <button className='Deliver-bnt'>Deliver</button>
            <button className='PickUp-tab-btn'>Pick Up</button>

         </div>
         <h2 className='Delivery-Address'>Delivery Address</h2>


        <h2 className='Jl-Kpg-Sutoyo'> Jl. Kpg Sutoyo</h2>
         <p className='Sutoyo-p'>Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</p>
              
               <div className='Edits-btn'>
                <button> <span> <FaEdit /></span> Edit Address</button>
                <button> <span className='fjf'>  <MdEventNote />   Add Note </span></button>
               </div>
                 <hr className='order-page-divder' />
                
  <div className='product-order-cart'>
    
       <div className='product-order-cart-left'>
         <img src={img6} alt="" />

         <div className='product-order-cart-left-datile'>
            <h2>Caffe Mocha</h2>
            <p>Deep Foam</p>
         </div>
       </div>
       <div className='product-order-cart-right'>
        <span className='cont-btn'>+</span>
        <h3>1</h3>
        <span className='cont-btn'>-</span>
       </div>
    
    </div>                

      <div className=' Discount-is-Applies'>
        <div className=' Discount-is-Applies-left'>
    <span className='active-icon  disconut-icon'> <RiDiscountPercentLine /></span>
    <h3>1 Discount is Applies</h3>
    </div>
    <span  className='djewi'> <FaAngleRight />
</span>
      </div>



       <h2 className='Payment-Summary-titel'>Payment Summary</h2>
           <div className='Payment-Summary-Price'>
            <p>Price</p>
            <h3>$ 4.53</h3>
           </div>
           <div className='Payment-Summary-Price'>
            <p>Delivery Fee</p>
            <h3> <span className='myapp-paymat'>$ 2.0</span>$ 1.0</h3>
           </div>
                              <div className='spacesj'></div>

        </div>

         <div className='order-sumbit-btn'>
             <div className='Cash-Wallet-div'>
                 <div className='Cash-Wallet-div-left'>
                    <span className='suhsdh'> <LuWallet /></span>
                    <div className='Cash-Wallet-datal'>
                        <h2 className=''>Cash/Wallet</h2>
                        <p className='reui'>$ 5.53</p>
                    </div>
                 </div>
                 <span className='fuhdf'><FaAngleDown /></span>
             </div>


             <button className='order-sumbit'>Order</button>
                     </div>
        
        </>
    )
  }
  
  export default Order