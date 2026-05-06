import React from "react";
import "./Map.css";
import { MdDirectionsBike } from "react-icons/md";

const Map = () => {
  return (
    <>
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3839.009969789244!2d72.48204156363697!3d30.970488664559422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1778043060297!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="map-page-detail">
        <span className="line-divder"></span>
        <h4 className="time">10 minutes left</h4>
        <p className="map-p">Delivery to <span className="text-bold"> Jl. Kpg Sutoyo</span></p>

<div className="lines-divders-all">
        <span></span>
        <span></span>
        <span></span>
        <span className="line-active"></span>
    </div>

     <div className="dilver-box">

        <div className="dilver-box-left">
            <span className="dilver-box-left-icon"></span>
        </div>

     </div>

    </div>
    
    </>
  );
};

export default Map;