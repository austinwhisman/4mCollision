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
                <form className="w-4/5 max-w-2xl mx-auto xl:ml-8 mb-0 font-sans">
                    <h3 className="text-yellow-300 ml-4">CONTACT</h3>
                    <span className="w-full border-t-4 border-white block"></span>
                    <div className="flex flex-wrap pt-8 -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-black focus:text-white text-gray-100 border rounded border-gray-900 focus:border-gray-500 py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-800" id="grid-first-name" type="text" placeholder="Jane"/>
                        
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-black focus:text-white text-gray-100  border border-gray-900 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" for="grid-city">
                                Make
                            </label>
                            <input className="appearance-none block w-full bg-black focus:text-white text-gray-100 border border-gray-900 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="grid-city" type="text" placeholder="Ford"/>
                        </div>
                        <div className="w-1/3 px-3 mb-2">
                            <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" for="grid-zip">
                                Model
                            </label>
                            <input className="appearance-none block w-full  bg-black focus:text-white text-gray-100 border border-gray-900 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="grid-zip" type="text" placeholder="F-150"/>
                        </div>
                        <div className="w-1/3 px-3 mb-2">
                            <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" for="grid-zip">
                                Year
                            </label>
                            <input className="appearance-none block w-full bg-black focus:text-white text-gray-100 border border-gray-900 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="grid-zip" type="text" placeholder="2021"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" for="grid-city">
                                City
                            </label>
                            <input className="appearance-none block w-full bg-black focus:text-white text-gray-100 border border-gray-900 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="grid-city" type="text" placeholder="Oxford"/>
                        </div>
                        <div className="w-1/2 px-3 mb-8">
                            <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" for="grid-zip">
                                Zip
                            </label>
                            <input className="appearance-none block w-full bg-black focus:text-white text-gray-100 border border-gray-900 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3 mb-6 md:mb-6">
                            <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" for="grid-city">
                                Tell Us More
                            </label>
                            <textarea class="w-full px-3 py-0 bg-black focus:text-white text-gray-100 border-gray-900 rounded-lg focus:outline-none focus:bg-gray-800 focus:border-gray-500" rows="4"></textarea>
                        </div>
                    </div>
                    <div>
                        <button className="hvr-sweep-to-right mb-6 lg:mb-0 w-1/2 font-bold mx-auto px-4 font-sans rounded text-black hover:text-yellow-300 py-2">
                            <a href="tel:2485724844">
                                SEND
                            </a>
                         </button> 
                    </div>
                </form>
                <div className="grid lg:grid-cols-2 col-span-2 relaive whitespace-pre-line">
                    <div className="w-4/5 mx-auto">
                        <h3 className="text-left ml-4 text-yellow-300">EXPLORE</h3>
                        <span className="w-full border-t-4 border-white block"></span>
                        <ul className=" pt-8 text-center font-sans font-medium mx-4 grid grid-cols-3 lg:grid-cols-2">
                            <Link to="/contact">
                                <li className="hover:text-white text-yellow-300 table mx-auto cursor-pointer text-sm md:text-base">
                                    Contact
                                </li>
                            </Link>
                            <Link to="/faq">
                                <li className="hover:text-white text-yellow-300 table mx-auto cursor-pointer text-sm md:text-base">
                                    FAQ
                                </li>
                            </Link>
                            <Link to="/information">
                                <li className="hover:text-white text-yellow-300 table mx-auto cursor-pointer text-sm md:text-base lg:pt-4 
                                ">
                                    Information
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
                    <div className="w-4/5 mx-auto">
                        <h3 className="text-left ml-4 text-yellow-300">SOCIAL</h3>
                        <span className="w-full border-t-4 border-white block"></span> 
                        <div className="place-content-center pt-8 grid grid-cols-1 font-sans font-medium pb-8 mx-4">
                            <div className="w-1/2 grid grid-cols-2">
                                <div className ="h-12 mx-auto rounded-md hvr-sweep-to-right">
                                    <a href="https://twitter.com/4mcollision" rel="noreferrer noopener" target="_blank"> 
                                        <img className ="h-12 mx-auto cursor-pointer rounded-md p-1" src={twitterSvg}></img>
                                    </a>
                                </div>
                                <div className ="h-12 mx-auto rounded-md hvr-sweep-to-right">
                                    <a href="https://www.facebook.com/pages/category/Automotive-Repair-Shop/4m-Collision-518458678567859/" rel="noreferrer noopener" target="_blank">
                                        <img className ="h-12 mx-auto cursor-pointer rounded-md p-1" src={facebookSvg}></img>
                                    </a>
                                </div>
                            </div>
                            <div className="col-span-3 mx-auto pt-12">
                                <button className=" bg-yellow-300 before:bg-gray-800 hvr-sweep-to-right w-auto font-bold mx-auto px-4 font-sans rounded text-black hover:text-yellow-300 py-6">
                                    <a href="tel:2485724844">
                                        Click To Call: 248-572-4844
                                    </a>
                                </button> 
                            </div>  
                        </div>
                        <div className="col-span-3 mx-auto pt-12">
                            <h3 className="text-left ml-4 text-yellow-300">ADDRESS</h3>
                            <span className="w-full border-t-4 border-white block"></span> 
                            <div className="text-yellow-300">
                                <p>1663 N. Lapeer Rd. Oxford, MI </p>
                            </div>
                            <iframe width="100%" height="450" style={{border:'0'}} loading="lazy" 
                                allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBVByHhCNJIgRqu3cwdMN8N0&key=AIzaSyDtKbbK4mGjmgCE-DTqJYCKuSM8wV6vYFM">
                            </iframe>
                        </div>  
                    </div>
                </div>
            </div>
                
        </footer>
  );
}

export default Footer