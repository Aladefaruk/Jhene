import React from 'react'
import { Link } from 'react-router-dom';
import VisibilitySensor from "react-visibility-sensor";
import {Spring} from 'react-spring/renderprops';

import Header from './component/Header';
import {
    Image
} from 'cloudinary-react';

import "../static/css/landingpage.css";
import Footer from './component/Footer';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <div className="wrapper">
                <div className="top-desc">
                    <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                            <Spring delay={200} to={{opacity:isVisible ? 1 : 0, transform : isVisible ? "translateX(0)" : "translateX(20px)"}}>
                                {props => (
                                    <div className="desc" style={{...props}}>
                                        <h4>E-commerce you <br/>can <span>trust</span></h4>
                                        <p className='p1'>Jhene cuts off the hassel and makes it easier for online shoppers to get legitimate and trusted vendors.</p>
                                        <hr/>
                                        <p className='p2'>We increase the market coverage of vendors and help them make more sales.</p>
                                        <div>
                                            <Link to="/chat">
                                                <span className="link-btn">
                                                    Start Shopping
                                                </span>
                                            </Link>
                                            <Link to="/vendor-form">
                                                <span className="link-btn link-btn2">
                                                    Open a Vendor Account
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </Spring>
                        )}
                    </VisibilitySensor>
                     <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                            <Spring delay={150} to={{position: "relative" , opacity:isVisible ? 1 : 0 }}>
                                {props => (
                                    <div className="imgs" style={{...props}}>
                                          <Image cloudName="jhene" publicId="Group_203_1_c8ccnx" />
                                    </div>
                                )}
                            </Spring>
                        )}
                    </VisibilitySensor>
                    {/* <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                            <Spring delay={150} to={{position: "relative" , opacity:isVisible ? 1 : 0, transform : isVisible ? "rotate(0)" : "rotate(-90deg)" }}>
                                {props => (
                                    <div className="imgs-sm" style={{...props}}>
                                        <Image cloudName="jhene" publicId="group2_musuvf"  />
                                    </div>
                                )}
                            </Spring>
                        )}
                    </VisibilitySensor> */}
                </div>
                <VisibilitySensor partialVisibility>
                    {({isVisible}) => (
                        <Spring to={{opacity: isVisible ? 1 : 0, transform :isVisible ? "translateY(0)" : "translateY(40px)"}} delay={250}>
                            {props => (
                                <div className="vendor-desc-img" style={{...props}}>
                                    <Image cloudName="jhene" publicId="header_1_2_vdokoa" className="header-lg-illustration"  />
                                </div>
                            )}
                        </Spring>
                    )}
                </VisibilitySensor>
                <div>
                <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                            <Spring delay={200} to={{opacity:isVisible ? 1 : 0, transform : isVisible ? "translateY(0)" : "translateY(40px)"}}>
                                {props => (
                                        <>
                                            <h4 className='about-us-text'>About Us</h4>
                                            <div className="about-us" style={{...props}}>
                                                <div className="about-us-desc">
                                                    <h4>What is Jhene?</h4>
                                                    <p>Jhene is a product designed to give e-commerce a whole new experience for both buyers and sellers.</p>
                                                    <p>Thousands of internet users spend time searching for legitimate vendors and service providers on social media, websites and search engines everyday.</p>
                                                    <p>Vendors also budget a lot for marketing and promotion to reach their prospective buyers.</p>
                                                    <p>Jhene bridges the gaps between customers and sellers by requests from prospective buyers and providing a link to a legitimate vendor.</p>
                                                    <p>Customer buys with trust, seller makes more sales. Everybody wins!</p>
                                                </div>
                                                <div className="about-us-img">
                                                    <Image cloudName="jhene" publicId="pose_f9_cropped_1_3_agjefk" className='stand-bot'  />
                                                    <Image cloudName="jhene" publicId="pose_f9_cropped_1_3_agjefk" className='stand-bot-sm'  />
                                                </div>
                                            </div>
                                        </>
                                )}
                            </Spring>
                        )}
                </VisibilitySensor>
                    <div className="the-team">
                        <h4>The Team</h4>
                        <p>One Developer, One Designer. One Product.</p>
                        <div className="pics">
                            <VisibilitySensor partialVisibility>
                                    {({isVisible}) => (
                                        <Spring   delay={150} to={{position: "relative" , opacity:isVisible ? 1 : 0, transform : isVisible ? "rotate(0)" : "rotate(-10deg)" }}>
                                            {props => (
                                                <div style={{...props}}>
                                                    <Image cloudName="jhene" publicId="Group_204_pcucbb"  />
                                                    <h4>Roy-Layinde Ayoola</h4>
                                                    <p>Developer</p>
                                                </div>
                                            )}
                                        </Spring>
                                    )}
                            </VisibilitySensor>
                            <VisibilitySensor partialVisibility>
                                    {({isVisible}) => (
                                        <Spring   delay={150} to={{position: "relative" , opacity:isVisible ? 1 : 0, transform : isVisible ? "rotate(0)" : "rotate(10deg)" }}>
                                            {props => (
                                                <div style={{...props}}>
                                                    <Image cloudName="jhene" publicId="Group_205_o6zc59"  />
                                                    <h4>Kolade Olufemi</h4>
                                                    <p>Designer</p>
                                                </div>
                                            )}
                                        </Spring>
                                    )}
                            </VisibilitySensor>
                        </div>
                    </div>
                    <VisibilitySensor>
                        {({isVisible}) => (
                            <Spring delay={150} to={{position: "relative" , opacity:isVisible ? 1 : 0, transform : isVisible ? "translateY(0)" : "translateY(30px)" }}>
                                {props => (
                                    <div className="contact-us" style={{...props}}>
                                        <h4>Contact us</h4>
                                        <p>You want to speak oor partner with us? Send us an email on <a href="mailto:apig.bot@gmail.com">jhene.app@gmail.com</a></p>
                                        <p>Or visit us on Twitter <a href="https://www.twitter.com/BotJhene" className='twit' target='_blank' rel="noopener noreferrer">@BotJhene</a></p>
                                    </div>
                                )}
                            </Spring>
                        )}
                    </VisibilitySensor>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage
