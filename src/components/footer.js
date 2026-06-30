import React, { useState } from "react";
import logoSvg from '../images/4mlogo.svg'
import twitterSvg from '../images/social-icons/twitter.svg'
import facebookSvg from '../images/social-icons/facebook.svg'
import instagramSvg from '../images/social-icons/instagram.svg'
import { Link } from "gatsby"
import "./footer.css"

const Footer = () => {
    return (
        <footer className="bg-gray-900 bg-opacity-90 text-white pt-16 sm:pb-16 h-5/6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="grid lg:grid-cols-3 col-span-3 relaive whitespace-pre-line">
                    <div className="w-4/5 mx-auto">
                        <h3 className="text-left ml-4 text-yellow-300">EXPLORE</h3>
                        <span className="w-full border-t-4 border-white block"></span>
                        <ul className=" pt-8 text-center font-sans font-medium mx-4 grid grid-cols-3 lg:grid-cols-2">
                            <Link to="/faq">
                                <li className="hover:text-white text-yellow-300 table mx-auto cursor-pointer text-sm md:text-base">
                                    FAQ
                                </li>
                            </Link>
                            <Link to="/kia">
                                <li className="hover:text-white text-yellow-300 table mx-auto cursor-pointer text-sm md:text-base lg:pt-4 
                                ">
                                    Kia
                                </li>
                            </Link>
                            <Link to="/goldclass">
                                <li className="hover:text-white text-yellow-300 table mx-auto cursor-pointer text-sm md:text-base pt-4 
                                ">
                                    Gold Class
                                </li>
                            </Link>
                            <Link to="/dupont">
                                <li className="hover:text-white text-yellow-300 table mx-auto cursor-pointer text-sm md:text-base pt-4 
                                ">
                                    Assurance Of Quality
                                </li>
                            </Link>
                            <Link to="/services">
                                <li className="hover:text-white text-yellow-300 table mx-auto cursor-pointer text-sm md:text-base pt-4 
                                ">
                                    Services
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="w-4/5 mx-auto" itemScope itemType="https://schema.org/LocalBusiness">
                        <h3 className="text-left ml-4 text-yellow-300 " >SOCIAL</h3>
                        <span className="w-full border-t-4 border-white block"></span> 
                        <div className="place-content-center pt-8 grid grid-cols-1 font-sans font-medium pb-8 mx-4">
                            <div className="w-1/2 grid grid-cols-2">
                                <div className ="h-12 mx-auto rounded-md hvr-sweep-to-right">
                                    <a href="https://twitter.com/4mcollision" rel="noreferrer noopener" target="_blank"> 
                                        <img alt="Twitter Logo" className ="h-12 mx-auto cursor-pointer rounded-md p-1" src={twitterSvg}></img>
                                    </a>
                                </div>
                                <div className ="h-12 mx-auto rounded-md hvr-sweep-to-right">
                                    <a href="https://www.facebook.com/pages/category/Automotive-Repair-Shop/4m-Collision-518458678567859/" rel="noreferrer noopener" target="_blank">
                                        <img alt="Facebook Logo" className ="h-12 mx-auto cursor-pointer rounded-md p-1" src={facebookSvg}></img>
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-4/5 mx-auto" itemScope itemType="https://schema.org/LocalBusiness">
                        <div className="col-span-3 mx-auto" >
                            <h3 className="text-left ml-4 text-yellow-300">ADDRESS</h3>
                            <span className="w-full border-t-4 border-white block"></span> 
                            <div itemProp="address" className="text-yellow-300">
                                <p>1663 N. Lapeer Rd. Oxford, MI </p>
                            </div>
                            <iframe width="100%" height="100%" style={{border:'0'}} loading="lazy" 
                                allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBVByHhCNJIgRqu3cwdMN8N0&key=AIzaSyDtKbbK4mGjmgCE-DTqJYCKuSM8wV6vYFM">
                            </iframe>
                        </div>  
                    </div>
                </div>
                <div className="col-span-3 mx-auto py-12">
                    <button itemProp="telephone" className=" bg-yellow-300 before:bg-gray-800 hvr-sweep-to-right w-auto font-bold mx-auto px-4 font-sans rounded text-black hover:text-yellow-300 py-6">
                        <a href="tel:2485724844">
                            Click To Call: 248-572-4844
                        </a>
                    </button> 
                </div>  
            </div>
        </footer>
  );
}

export default Footer

