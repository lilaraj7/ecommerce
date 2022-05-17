import React from "react";
// import {Swiper,SwiperSlider} from 'swiper/react';
// import SwiperCore from "swiper";
// import './swiper/swiper-bundle.css';
import "./service.css";
import 'animate.css';

// console.log("https://img.shein.com/images/shein.com/201608/09/14720890423669216128_thumbnail_900x1199.webp")


const Service = () => {
  return (
   <section>
       <div className="one">
         
         <div className="two">
         <h3 className="animate__animated animate__fadeInDown">Elessi store</h3>
         <h2 className="animate__animated animate__zoomInLeft" >Autum<br></br>
            & winter 2018</h2>
            <div className="animate__animated animate__fadeInUp">
              {/* <p className="animate__animated animate__fadeInUp">SHOP Now</p> */}
              <button>SHOP NOW</button>
            </div>
         {/* <button className="animate__animated animate__fadeInUp">SHOP NOW</button> */}
         </div>

         <div className="bagscat">
         <div className="mini">
           <div className="mini-title">
           <p><b>Mini Backpack</b><br></br>Bag & Accesories</p>
           

           
             </div>    
            </div>
            <div className="hand">
              <div className="hand-title">
                <p><span STYLE="font-weight:bold;font-size:15px">Mini Baclpack</span><br></br>
               <span STYLE="font-weight:light-bold" >Bag & Accesories</span>
                </p>
              </div>
         
                 
            </div>
            <div className="newbag">
              <div className="newbag-title">
              <p><span STYLE="font-weight:bold">New Bag</span><br></br>
               slae off 50%
                </p>
              </div>
               
            </div>
         </div>
       
         
         
       </div>
           
       
   </section>
);
};

export default Service;
