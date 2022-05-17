import React from 'react';
import BannerRight from './Maincomponents/Rightbanner/BannerRight';
import Header from './Maincomponents/Header/Header';
import Service from './Maincomponents/Main/Service';
import Section from './Maincomponents/Section/Section';
import Menubar from './Maincomponents/Productcard/Menubar/Menubar';
import Product from './Maincomponents/Productcard/Product/Product';
import Toprate from './Maincomponents/Highlighted/Toprate';
import Footer from './Maincomponents/Footer/Footer';


function App() {
  return (
    <div className='Main'>
      
    <Header/>
    <div className='cent'> 
   
    <BannerRight/>
    
    
    <Service/>

    
     
    
    </div>
    <div className='section'>
      <Section/>
    </div>
    <div>
      <Menubar/>
    </div>
    <diV>
      <Product/>
    </diV>
    <div>
      <Toprate/>
    </div>
    <div>
      <Footer/>
    </div>
    
    </div>
   
  );
}

export default App;
