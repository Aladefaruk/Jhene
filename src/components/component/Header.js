import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import VisibilitySensor from "react-visibility-sensor";
import {Spring} from 'react-spring/renderprops';

import {
    hamburgerIcon
} from '../../static/index';
import '../../static/css/header.css';

import {
    Image
} from 'cloudinary-react';

const Header = () => {
    const [isHamburgerMenu,setIsHamburgerMenu] = useState(false);
    const [isScrolled,setIsScrolled] = useState(false);
    

    useEffect(() => {
        window.onscroll = () => {
            if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
                setIsHamburgerMenu(false);
            }
        }
         // eslint-disable-next-line
    }, [])

    return (
        <>
            <VisibilitySensor>
            {({isVisible}) => (
                <Spring to={{display: isHamburgerMenu ? "" : "none", opacity:isVisible ? 1 : 0, height : isVisible ? "207px" : "0px"}}>
                    {props => (
                        <div className="fixed-header-sm" style={{...props}}>
                            <p onClick={() => setIsHamburgerMenu(false)}>
                                &#10005;
                            </p>
                            <ul>
                                <li>
                                    <Link to="/chat" className="sm-links">
                                        Get Started
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/vendor-form" className="sm-links">
                                        Request Vendor Access
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="sm-links">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="sm-links">
                                        About us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </Spring>
            )}
        </VisibilitySensor>
            <div className="header">
                    <div className="lg">
                        <div>
                            <Link to="/" style={{textDecoration:"none",cursor:"pointer"}}>
                                <Image cloudName="jhene" publicId="logo_blue_1_c5fe2q" style={{width:"174px",height:"60px"}} />
                            </Link>
                        </div>
                        <div className="links">
                            <Link to="/contact" className="link">
                                Contact
                            </Link>
                            <Link to="/about" className="link">
                                About us
                            </Link>
                            <Link to="/vendor-form" className="link ">
                                Join as a Vendor
                            </Link>
                            <Link to="/chat" className="link link-btn link-btn2">
                                Start Shopping
                            </Link>
                        </div>
                    </div>
                    <div className={isScrolled ? "sm-md scrolled" : "sm-md"}>
                        <div>
                            <Link to='/'>
                                <Image cloudName="jhene" publicId="logo_blue_1_ptflze"  className="header-logo" style={{width:"94px",height:"32px"}} />
                            </Link>
                        </div>
                        <div onClick={() => setIsHamburgerMenu(true)}>
                            <img src={hamburgerIcon} alt="" className="hamburger-icon" />
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Header
