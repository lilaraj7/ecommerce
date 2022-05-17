import React from "react";
import "./header.css";
import { BiNews } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';
import { GrTwitter } from 'react-icons/gr';
import { CgFacebook } from 'react-icons/cg';
import { FiMail } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { BiCategory } from 'react-icons/bi';
import { BsCart } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { BiGitCompare } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';


const Header = () => {
    return (
        <header className="header-container">
            <div className="topbanner">
                <div className="topban-1">
                    <BiNews className="newsp" />
                    <h1>Add here anything or remove it....</h1>

                </div>
                <div className="right-side">
                    <div className="falagban">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAA8CAMAAABreNUXAAAAolBMVEX////IEC4BIWnICiz9+vrJJDbGABrmrbIAAFGRkq0ADWPDAAAAAF8AH2jHACgAAF3EAAoAAFcAEmTGACHy8/bs7fHy1NZ7gKAAFmXk5evFABH67/DVZ3CChqT46eqZnLTRVF5vc5iipbtjaZGsrsJaYIsAAEP03d7Ze4Lbgojdio/vzM7SW2TWbnbPSlbNP0vMNkPswsQcK27inaLpuLvglJk2JYQbAAADw0lEQVRYhe2Z63aiMBSFg1A6hYBBrKVYL7W2FRW17fj+rzbJSSAJF1Gq45o1Pb9aV8jn3gvwnB309I5k3Y+w0zlczh1dd2sbWdm39P+7xqvw6B6hceKzS3x3PUB+vFbJ/SZyG66gpnbIqPF0QC9h+ILmwPHOyPWcYNSn1AUBqgtUhHyjRGaaa8kncj2qFahumDnMK425eF3zQ63bp3Ed/EAdHi6Ew5uBZLw/uVxzqpODXqXmE7heLwBqQkKTATYr1VRGJowcFsm4inw01+txrQl3mEwHGjWaWJS85uQ4Havk526vNbfXfQZq5rCq1ZpEyMN4wtxeu1zzQiOX3T6Kmzm8rHIYTbrYQ3QRdlTNpKTZO5UrtC75LUsKWh1MN0Tw9bA3ox8NpsJtTfOj7nYzl1If6f7LkDu81bTOPAwykDAGO0CudPvxOYi8I7leFDDqcC8c3n5oVAeLjVB+AY4Oao6O4kagdbi02QKTFKgezr9+zmXkDpA3nGwvhir5RZAPcaPuC3N4H9pMa7zTqR2s3CgKl5F7c7piNWVum6GbaGTudi2XOsyp4LBZcHjew9rtqXFB8xw0x9ztpKS5jiu1MocLWucdXHgcC1xG/gTNWwKabZ38GuBKLg5eKRXtfeawGd/81qifRWoFF+4wIG+E20udPKrgjhjV+iJAJTudGpWplVypWbhta+R+BbfPqL5wuFErcH9V11t3Rt9hq53LS3uqylz65IiFhkq1Zt23mv1Rqypx/1L9w1yrRRW4rba4aVVmzjXbbYDMVmXIarcBMq5TP9wf7g/3DNxrvTeu9Z681u/CtX4H/zfuwb4ur9+G6Nt4a1nPHS/Ewt3qcF93oI+V1F3MbmDb/7Jq+9i86FCmjPi1fWxt365QCWvHbcKoB/p2hewqY/6RfXtR68dNDFR/j5rnlJyc2EAm2zrN1XOZpG65w+HeOmouU8ixElk1zGViDlWoLtMaEqAeN4cqZOH2FDTXz6Fi7pbUHRuPTEUrq+a5W5JFTEdAc83cLXIGRSsBh2EoOzFnyGu8iJXQrCJnELmKpIohlOyHrXIVhawGooVcReRIea22fAANl1brHKlBs8zNJFUEKzFz+Bu5mSSnPHomLGHPcjOREypU4TBQv5cT1rgNOWFU0CpG/GR4llxU0RyrmiPt1ZqFZhAgnSkHzus9FYEwS9h1qhJbnTH3VsnlU4XBNJYx3Zlzfun2E7gdxmlGVQPRC5xrSM3iVEFx2AgJaL3MOU6BzP5YC4fT8UXPrSSZAjOHDT8ZX/ycTtH8ByN5jx1m2VzaAAAAAElFTkSuQmCC" height="15px" width="25px" />
                        <p>English</p>
                    </div>
                    <div className="currency">
                        <p>Us Dollar</p>
                    </div>
                    <div className="log-user">
                        <div className="icon-user">
                            <BiUserCircle className="user" />
                        </div>
                        <div className="nam-1">
                            <p>Login/Registration</p>
                        </div>

                    </div>
                </div>


            </div>
            <div className="top-head">
                <div classname="top-header-bar">
                    <div className="sociamedia-icon">
                        <ul className="icon">
                            <li><GrTwitter className="twit" /></li>
                            <li><CgFacebook className="face" /></li>
                            <li><FiMail className="mail" /></li>
                            <li><FiInstagram className="insta" /></li>
                        </ul>

                    </div>
                    <div className="store-name">
                        <h1>Elessi</h1>
                    </div>
                    <div className="right-icon">
                        <ul className="cate">
                            <li><BiCategory className="cate-icon" /></li>
                            <li><BsCart className="cate-icon-2" /></li>
                            <li><BsHeart className="cate-icon-3" /></li>
                            <li><BiGitCompare className="cate-icon-4" /></li>
                            <li><BsSearch className="cate-icon-5" /></li>

                        </ul>
                    </div>


                </div>
                </div>


                <nav className="navigation">
                    <ul className="navbar">
                        <li className="home"><a href="home">HOME<IoIosArrowDown className="down" /></a></li>
                        <li className="shop"><a href="shop">SHOP</a></li>
                        <li className="element"><a href="element">ELEMENT</a></li>
                        <li className="page"><a href="pages">PAGES</a></li>
                        <li className="vendor"><a href="vendor">VENDORS</a></li>
                    </ul>
                </nav>

            


        </header>

    )
}

export default Header;
