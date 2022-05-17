import React,{useState,useEffect} from "react";
import './toprate.css';
import { BsArrowsMove } from 'react-icons/bs';
import Detail from "../Detail/Detail";



const Electronictop= ({image,title,rate,price,icon})=>{
    return<>
    <div className="top-1">
        <div className="ptop-1">
        <div className="quickview">
                      {icon}
                       </div>
        <img className="topimg" src={image}/>
        </div>
        <div className="ptop-title">
            <span className="e-title">{title}</span>
            <span className="rating">Rating:{rate}</span>
            <span className="p-price">${price}</span>
        </div>

    </div>
    
    </>
}

const Jwelery= ({image,icon,title,rate,price})=>{
    return<>
    <div className="top-1">
        <div className="ptop-1">
        <div className="quickview">
                      {icon}
                       </div>
        <img className="topimg" src={image}/>
        </div>
        <div className="ptop-title">
            <span className="e-title">{title}</span>
            <span className="rating">Rating:{rate}</span>
            <span className="p-price">${price}</span>
        </div>

    </div>
    
    </>
}
const Men= ({image,icon,title,rate,price})=>{
    return<>
    <div className="top-1">
        <div className="ptop-1">
        <div className="quickview">
                      {icon}
                       </div>
        <img className="topimg" src={image}/>
        </div>
        <div className="ptop-title">
            <span className="e-title">{title}</span>
            <span className="rating">Rating:{rate}</span>
            <span className="p-price">${price}</span>
        </div>

    </div>
    
    </>
}



const Toprate=()=>{

  

 const [detail,setDetail]=useState(true)
 const changevisibility = ()=>{setDetail(init=>!init)}


const [electronic,setElectronic]=useState([])
const [jwelery,setJwelery]=useState([])
const [men,setMen]=useState([])

const [pid,setPid]=useState('')

 useEffect(() => {
    getrating();
    
},[]);
useEffect(()=>{
    getjwelery();
},[])

useEffect(()=>{
    getmen();
},[])


const openProductDetail = (id)=>{
    setDetail(!detail)
    setPid(id)
}


const getrating = async () => {
    fetch('https://fakestoreapi.com/products/category/electronics?limit=4')
            .then(res=>res.json())
            .then(json=>setElectronic(json))
            
}
const getjwelery= async()=>{
    fetch('https://fakestoreapi.com/products/category/jewelery?limit=4')
    .then(res=>res.json())
    .then(json=>setJwelery(json))
}

const getmen= async()=>{
    fetch(`https://fakestoreapi.com/products/category/men's clothing?limit=4`)
    .then(res=>res.json())
    .then(json=>setMen(json))
}

    return(
      
        <div className="highlight">                    
          {<Detail  changevisibility={changevisibility} id={pid} detail={detail} />}
           

           <div className="toprate">
               <h2>Electronics</h2>
               <div className="top-1">
                   <div className="ptop-1">
                       {/* <div className="quickview">
                       <BsArrowsMove className="quick-icon"  onClick={()=>setDetail(!detail)} />
                       </div> */}
                      
                  
                       {electronic.map(electronic=>(
                        //    <h1>bdjdhjsdjh</h1>
                        <Electronictop image={electronic.image} icon={ 
                        <BsArrowsMove className="quick-icon"  onClick={()=>openProductDetail(electronic.id)} />
                        } title={electronic.title}  rate={electronic.rating.rate} price={electronic.price}/> 
                          
                       ))}

                   {/* <BsArrowsMove className="quick-icon"  onClick={()=>setDetail(!detail)} /> */}
                     </div>


               </div> 
            
               
           </div>
           <div className="bestselling">
               <h2>jewelery</h2>
               <div className="best-1">
                   <div className="bestsel-1">
                   {jwelery.map(jwelery=>(
                        //    <h1>bdjdhjsdjh</h1>
                        <Jwelery image={jwelery.image} icon={ 
                            <BsArrowsMove className="quick-icon"  onClick={()=>openProductDetail(jwelery.id)} />
                            } title={jwelery.title} rate={jwelery.rating.rate} price={jwelery.price}/> 
                          
                       ))}
                 </div>
               </div> 
           </div>
           <div className="onsale">
               <h2>Men's clothing</h2>
              <div className="onsale-1">
                  <div className="sale-1">
                  {men.map(men=>(
                        //    <h1>bdjdhjsdjh</h1>
                        <Men image={men.image} icon={ 
                            <BsArrowsMove className="quick-icon" onClick={()=>openProductDetail(men.id)}  />
                            } title={men.title} rate={men.rating.rate} price={men.price}/> 
                          
                       ))}
                 </div>
              </div>
             
             
           </div>

        </div>
        
    )
}

export default Toprate;