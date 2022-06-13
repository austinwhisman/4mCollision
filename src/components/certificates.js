import React, { useState } from "react";
import basflogo from "../images/basflogo.svg"
import dupontlogo from "../images/dupont-assurance.svg"
import kiaLogo from "../images/kia-certified.png"
import goldclasslogo from "../images/goldclass.png"
import { Link } from "gatsby"

const Certificates = () => {
    return (
        <div className="w-full object-contain col-span-2 grid md:grid-cols-4 font-sans bg-white">
            <div className="w-full min-h-19 md:h-auto">
                <img  alt="BASF Chemistry Logo" className="lazyload transition-opacity duration-1000 ease-in-out opacity-0 w-full h-2/3 max-h-96 mt-8 object-cover mx-auto text-white" src={basflogo}></img>
                <div className="mx-auto w-max">
                </div>
            </div>
            <div className="w-full  min-h-19 md:h-auto ">
            <img alt ="Kia Recognized Collision Repair Center" className="lazyload transition-opacity duration-1000 ease-in-out opacity-0 w-2/3 h-2/3 max-h-96 mt-8 object-scale-down mx-auto" src={kiaLogo}></img>
                <div className="mx-auto w-max">
                <Link to="/kia">
                    <button  className="hvr-sweep-to-right font-bold py-2 px-4 rounded text-gray-800 hover:bg-white hover:text-yellow-300 ">
                    Learn More
                    </button>
                </Link>
                </div>
            </div>
            <div className="w-full min-h-19 md:h-auto">
                <img alt ="Du Pont Assurance Of Quality" className="lazyload transition-opacity duration-1000 ease-in-out opacity-0 w-2/3 h-2/3 max-h-96 mt-8 object-scale-down mx-auto" src={dupontlogo}></img>
                <div className="mx-auto w-max">
                <Link to="/dupont">
                    <button  className="hvr-sweep-to-right font-bold py-2 px-4 rounded text-gray-800 hover:bg-white hover:text-yellow-300 ">
                    Learn More
                    </button>
                </Link>
                </div>
            </div>
            <div className="w-full min-h-19 md:h-auto">
                <img alt ="Gold Class I-CAR logo" className="lazyload transition-opacity duration-1000 ease-in-out opacity-0 w-2/3 h-2/3 max-h-96 mt-8 object-scale-down mx-auto" src={goldclasslogo}></img>
                <div className="mx-auto w-max">
                <Link to="/goldclass">
                    <button className="hvr-sweep-to-right font-bold py-2 px-4 rounded text-gray-800 hover:text-yellow-300 hover:bg-white">
                    Learn More
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
}

export default Certificates
