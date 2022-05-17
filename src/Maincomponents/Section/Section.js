import React from "react";
import "./section.css";
import { TiPlane } from 'react-icons/ti';
import { BiSupport } from 'react-icons/bi';
import { FiRefreshCcw } from 'react-icons/fi';
import { BiGift } from 'react-icons/bi';
import { BsPiggyBank } from 'react-icons/bs';


const Section = () => {
    return (
        <div className="logos">
            <div className="logos-1">
                <TiPlane className="plane"/>
                <div className="title">
                  <span className="ship"> Free shipping</span> 
                </div>
                <div className="us-shipp">
              <span STYLE="font-size:14px;hight:1.5;">Free Shipping for all US order</span>  
                </div>
            </div>
            <div className="logos-2">
                <BiSupport className="support" />
                <div className="su-4"><span className="su-2">Support 24/7</span></div>
                <div className="su-7">We support 24hrs a day</div>
                

            </div>
            <div className="logos-3">
                <FiRefreshCcw className="gift" />
                <div className="money"><span className="mo">Money Back</span></div>
               <div className="cash">You have 30 days to Return</div>
               
            </div>
            <div className="logos-4">
                <BiGift className="gift" />
                <div className="gift-1"><span className="gift-ti">Payment secure</span></div>
                <div className="gift-2">we ensure secure payment</div>
              
            </div>
            <div className="logos-5">
                <BsPiggyBank className="pig" />
                <div className="pig-1">
                    <span className="pi-1">Discount</span>
                </div>
                <div className="pig-2">Up to 40% for member</div>
              
            </div>
        </div>
    );
}
export default Section;

