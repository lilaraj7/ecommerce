import React from "react";
import './footer.css';
import { GrTwitter } from 'react-icons/gr';
import { CgFacebook } from 'react-icons/cg';
import { FiMail } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';

const Footer = () => {

    return (
        <footer>
            <h1>Follow us on Instagram</h1>
            <div className="top-footer-container">
                <img src="https://p.favim.com/orig/2018/08/06/girls-instagram-models-xodidar-Favim.com-6125645.jpg" height="320px" width="16.67%" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPvphBte7E2hr7Z1JSIfFwrHUYhmjMOp3qw&usqp=CAU" height="320px" width="16.67%" />
                <img src="https://p.favim.com/orig/2018/08/06/girls-instagram-models-xodidar-Favim.com-6125645.jpg" height="320px" width="16.67%" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPvphBte7E2hr7Z1JSIfFwrHUYhmjMOp3qw&usqp=CAU" height="320px" width="16.67%" />
                <img src="https://p.favim.com/orig/2018/08/06/girls-instagram-models-xodidar-Favim.com-6125645.jpg" height="320px" width="16.67%" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPvphBte7E2hr7Z1JSIfFwrHUYhmjMOp3qw&usqp=CAU" height="320px" width="16.67%" />
            </div>
            <div className="bottom-footer">
                <div className="bottom-left">
                    <div className="bttom-left-left">
                   
                    {/* <span>Calista Wise 7292 Dictum Av. Antonio, Italy</span> */}

                        <ul className="left-left-list">
                        <p className="f1-header">Elessi</p>
                            <li>Calista Wise 7292 Dictum Av. Antonio, Italy.</li>
                            <li>(+01)-800-3456-88</li>
                            <li>nasathemes@gmail.com</li>
                            <li>elessi.nasatheme.com</li>
                        </ul>
                    </div>
                    <div className="bttom-left-right">
                        <ul className="react-icon">
                            <li><GrTwitter className="on-1" /></li>
                            <li><CgFacebook className="on-1" /></li>
                            <li><FiMail className="on-1" /></li>
                            <li><FiInstagram className="on-1" /></li>
                        </ul>
                        <div className="right-1">
                            <ul className="bt-right">
                                <li>Delivery policy</li>
                                <li>Privacy policy</li>
                                <li>Terms and condtion</li>
                                <li>Search term</li>
                                <li>Order & Return</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="bottom-right">
                    <div className="bottom-right-left">
                        <ul className="right-le">
                            <p>Newsletter</p>
                            <li>Customer Service</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Condition</li>
                            <li>Best Seller</li>
                            <li>Manufactures</li>
                        </ul>
                    </div>
                    <div className="bottom-right-right">
                        <div className="em">
                            <input className="email" type='text'placeholder="enter your email"></input>
                            <div  className="em-subscribe">
                           <button>subscribe</button>
                            </div>
                         
                        </div>
                        <div className="table">
                        <table className="table-11">
                            <tr>
                                <td>Monday-friday</td>
                                <td>08:00-20:00</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>09:00-21:00</td>
                            </tr>
                            <tr>
                                <td>saturday</td>
                                <td>13:00-22:00</td>
                            </tr>

                        </table>
                        <div className="payment">
                        <img src="https://f5d5a4q7.rocketcdn.me/wp-content/uploads/2017/11/payment-icons.png" height="35px" width="150px" />

                        </div>
                        </div>

                        


                    </div>
                </div>
            </div>
            <div className="foot-banner">
                <div className="foot-left">
                    <p>© 2022 <b>Nasatheme </b>-All Right reserved!</p>
                </div>
                <div className="foot-right">
                    <ul className="down-banner">
                        <li>Privacy & cookies</li>
                        <li>Terms & condition</li>
                        <li>Accessibility</li>
                        <li>Store Directory</li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>


        </footer>
    )
}
export default Footer;