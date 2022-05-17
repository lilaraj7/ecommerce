import React from "react";
import "./login.css";
import {FiFacebook}  from 'react-icons/fi';
import {FcGoogle} from 'react-icons/fc';
import {ImCross} from 'react-icons/im';

const Login = () => {
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
   
    return (
        <div className="login-container">
            <div className="top-log">
                <h1>Elessi</h1>
                <buttom className="btn-del" type="submit"><ImCross className="btn-cut"/></buttom>
            </div>
            <div className="main-log">
                <h>Great to have you back!</h>
                <div className="email">

               <div>Enter your email*:</div> 
               <div> <input type='radio'/>Remember</div>
               
                </div>
                <div><input className="mail-box" type='text' /></div>
                
                <div className="pass-1">
                    <div className="pass-1-1">Password*:</div>
                    <div className="pass-1-2">
                        <a href="https://elessi.nasatheme.com/my-account/lost-password/">Lost?</a>
                    </div>

                </div>
                <div className="pass-1-2-2"> <input className="password" type='text'/></div>
                <div className="acc-1">
                    <h1>SIGN IN TO YOUR ACCOUNT</h1>
                </div>
               <p>Or login with</p> 
               <div className="logos-social-1">
                   <div className="fb-1">
                   <FiFacebook className="faceb"/>
                  <p>Facebook</p>
                   </div>
                   <div className="fb-2">
                       <FcGoogle className="google"/>
                       <p>Google</p>
                   </div>
                  
               </div>
               
              
            </div>
            <div className="foot">
                  <p>Not a member?</p>
                  <a href="create Account">Create Account</a>
            </div>
          
           
        </div>

    )
}
export default Login;