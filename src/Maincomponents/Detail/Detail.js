import React,{useState,useEffect} from "react";
import './detail.css'
import { IoIosArrowDropright } from 'react-icons/io';
import {BsPiggyBank} from 'react-icons/bs';
import {BsShare} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'




const Detail = ({changevisibility ,detail,id}) => {
    const [number,setNumber]=useState(1)

    const [dproduct,setDproduct]=useState([])

    const sum=()=>{
       setNumber( number + 1)
    }

    const sub=()=>{
        if(number>1){
            setNumber(number-1);
        }else{
            setNumber(1)
        }
    }

useEffect(()=>{
    const getall = async () => {
        
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>setDproduct(json))
    }
    getall();
},[id])






    return (
        <div className={`con-main ${detail? 'move-right':'move-left'}`} >

            {/* {console.log(dproduct,"9999999")} */}
            <div className="back-btm">
                <button className="back-111" onClick={() => changevisibility()}><IoIosArrowDropright className="back-arrow" /></button>

            </div>
            <div className="cotainer-detail">
               
                <div className="img-container">
                {/* {electronic.map(electronic=>(
                        //    <h1>bdjdhjsdjh</h1>
                        <Electronictop image={electronic.image} title={electronic.title} rate={electronic.rating.rate} price={electronic.price}/> 
                          
                       ))} */}
                    {/* {dproduct.map(dproduct=>(
                        <Dall image={dproduct.image}/>
                    ))} */}
                    <img className="knit-iamg" src={dproduct.image} />
                    <img className="knit-iamg-2" src={dproduct.image}/>
                </div>
                <div className="detail-title-container">
                    <div className="detai=title-name-1">
                        <span className="n-1"> Elessi Knit</span>
                    </div>
                    <div className="detail-rate">
                        <div className="rate-img">
                          
                            {/* {dproduct.rating.rate} */}
                            {/* <h5>Rating:{dproduct.rating.rate}</h5> */}

                        </div>
                        <div className="store-link">
                            <button>Elessi</button>
                        </div>

                    </div>
                    <div className="detail-price">
                        <span className="d-p">${dproduct.price}</span>
                    </div>
                    <p>{dproduct.title}</p>
                    
                    <p> <BsPiggyBank className="pigicon-111"/><span className="p-saving"> Bulk Savings
                       </span><span className="buy">(Buy more save more)</span></p>
                      
                   <div className="box-detail">
                       <div className="dbox-1">
                        <span>Buy 1</span>
                        <span>${dproduct.price} each</span>
                       </div>
                       <div className="dbox-1">
                        <span>Buy 2</span>
                        <span>$220 each</span>
                       </div>
                       <div className="dbox-1">
                        <span>Buy 3</span>
                        <span>$200 each</span>
                       </div>
                   </div>
                   <span className="color">color:Blue</span>
                   <div className="color-style">
                       
                       <span className="c-fig-1">
                           <img src="https://f5d5a4q7.rocketcdn.me/wp-content/uploads/2016/06/5559315300_2_6_1_icon.jpg"/>
                       </span>
                       <span className="c-fig-1">
                           <img src="https://f5d5a4q7.rocketcdn.me/wp-content/uploads/2016/06/5559315400_2_6_1_icon.jpg"/>
                       </span>
                       <span className="c-fig-1">
                           <img src="https://f5d5a4q7.rocketcdn.me/wp-content/uploads/2020/05/elessi-knit-gray.jpg"/>
                       </span>
                   </div>
                   <span>SIZE:M</span>
                   <div className="size">
                       
                       <span className="size-11">M</span>
                       <span className="size-11">L</span>
                   </div>
                   <div className="ra-ca">
                   <div className="range-cart">
                   <span className="range-1">{number}</span>
                       <span className="add-sub">
                       <button className="add-1" onClick={sum}>+</button>
                       <button className="add-1" onClick={sub}>-</button>
                       </span>
                    
                    
                   </div>
                   <div className="add-to">
                        <button className="add-to-cart">ADD TO CART</button>
                        <button className="buy-now">BUY NOW</button>
                    </div>

                   </div>
                   <div className="sku">
                        
                   <span><span className="sku-1">SKU</span>: FSH_U5L42-02</span>
                  <span><span className="sku-1">Categories</span>: {dproduct.category}</span>
                  <span><span className="sku-1">Tags</span>: Coats, Knit, Trending</span>
                   </div>
        
                </div>
                {/* <div className="share-react-iocns"></div> */}
                <div className="share-icons">
                   <div className="sha-1">
                       <div><BsShare className="share-22"/></div>
                       <div className="share-22">Share</div>
                   </div>
                  <div className="bstwit">
                  <BsTwitter/>
                  <span className="message-twit">Share on Twitter</span>
                  </div>
                   <div className="faface">
                   <FaFacebookF/>
                   <span className="message-facebook">Share on facebook</span>
                   </div>
                   <div className="fateli">
                   <FaTelegram/>
                   <span className="message-teligram">Share on Telegram</span>
                   </div>
                   <div className="aiout">
                   <AiOutlineMail/>
                   <span className="message-aiout">share on e-mail</span>
                   </div>
                 
                </div>
               
            </div>



        </div>
    )
}

export default Detail;