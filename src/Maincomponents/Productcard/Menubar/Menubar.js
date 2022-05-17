import React from "react";
import "./menubar.css";


const Menubar=()=>{
    return(
        <div className="menu-container">
            <h1>Trendy item</h1>
            <div className="menu">
                <ul className="allist">
                    
                    <li  ><a href="All">All</a></li>
                    <li ><a href="Featured">FEATURE</a></li>
                    <li ><a href="Best selling">BEST SELLING</a></li>
                    <li ><a href="Top rated">TOP RATED</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Menubar;