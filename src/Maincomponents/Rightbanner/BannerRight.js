import React,{useEffect,useState} from "react";
import "./rightbanner.css"

const BannerRight=()=>{

    const [categories,setCategories] = useState([])


    useEffect(()=>{
        getList();
      });
     

    const getList=async()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>setCategories(json))
    }

    return(
        <aside>
            <div className="main-box">
           
                <div className="cat-heading-1">
                <span className="cat-heading-1-h1">SHOP OF CATEGORY</span>
                </div>
                
                   
                
                <ul className="list">

                    {
                        categories.map(e=><li>{e}</li>)
                    }
  {
                        categories.map(e=><li>{e}</li>)
                    }
                      {
                        categories.map(e=><li>{e}</li>)
                    }

                    {/* <li>Fashion</li>
                    <li>Forniture</li>
                    <li>Accessories</li>
                    <li>Bike</li>
                    <li>wedding dress</li>
                    <li>Comple Veston</li>
                    <li>Beauty</li>
                    <li>Sport</li>
                    <li>Football</li>
                    <li>Digital</li>
                    <li>Shop Now</li> */}
                    
                </ul>
            </div>
        
        </aside>

    )
}
export default BannerRight;