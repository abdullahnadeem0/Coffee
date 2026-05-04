import React from "react";
import lad from "../imgs/Image Onboarding (1).png";
import img1 from "../imgs/Shadow Container.png";
import "./Landing.css"
const Landing = () => {
  return (
    <>
    <div className="landing-main-canterner">
   <img className="landing-img" src={lad} alt="image" />
   <img className="landing-Shadow" src={img1} alt="image" />
   
   <div className="landing-contant">

   </div>
   </div>
    </>
  );
};

export default Landing;