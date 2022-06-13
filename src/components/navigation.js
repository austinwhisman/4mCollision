import React, { useState } from "react";
import logoSvg from '../images/4mlogo.svg'
import { MenuIcon } from '@heroicons/react/outline'
import { Link } from "gatsby"

const Navigation = ({navBackground}) => {
    const [open, setOpen] = useState(false);

    return (
      <div className={` bg-gray-900 w-full h-20 fixed z-10 transition duration-500 ease-in-out ${(navBackground  && !open || open  && navBackground || open  && !navBackground) ? "bg-opacity-90": "bg-opacity-0" } `}>
        <Link className = 
          {
            `h-10 transform absolute top-2/3 sm:top-1/2
            -translate-y-1/3 transition-transform 
            duration-500 ease-in-out 
            ${(navBackground  && !open || open  && navBackground || open  && !navBackground) ? "translate-x-1": "-translate-x-full" }` 
          }
          
          style={{zIndex: '1000'}}
          to="/"
        >
          <img className ="h-full w-full" src={logoSvg}></img>
        </Link>
        <div className={`z-30 w-full absolute left-0 top-0 grid grid-cols-4 text-xs md:text-sm font-san
                   
        `}
        >
          <div className={`col-span-4 grid grid-cols-4 ${(open && navBackground || navBackground && !open || open && !navBackground) ? "bg-yellow-300 text-black": "text-white"}`}>
            <p className="mb-0 font-sans col-span-2">
              1663 N. Lapeer Rd. Oxford, MI
            </p>
            <p className="mb-0 font-sans text-center">
              Mon-Fri 8-5
            </p>
            <p className=" mb-0 text-center font-sans">
              <span> Call:</span> <a href="tel:2485724844">248-572-4844</a>
            </p>
          </div>
          <div className="col-span-1 col-end-5 py-5 relative">
            <button onClick={() => { setOpen(!open);  }} 
              className="col-end-1 row-end-2 absolute text-yellow-400 z-50 md:hidden hover:text-red-500  right-10"
              style={{zIndex: '1000'}}
            >
              <div>
                <MenuIcon className="h-8 w-8"></MenuIcon>
              </div>
            </button>
          </div>
        </div>
        <div className= { 
          `
          md:h-inherit
          open fixed
          w-full 
          flex flex-wrap 
          bg-black bg-opacity-90
          text-center place-content-center
          z-0
          transition-transform duration-500 ease-in-out transform
          overflow-y-scroll
          md:overflow-y-visible
          ${
            open 
            ? "translate-x-0: md:opacity-100"
            : "-translate-x-full opacity-0 md:opacity-100"
           }
          justify-center
          md:top-0
          md:right-0
          md:bg-transparent
          md:text-white
          md:justify-end
          md:transition-none
          fixed
          h-full 
          w-full 
          flex flex-wrap 
          bg-black bg-opacity-95
          text-center place-content-center
          z-0
          md:fixed
          md:transition-transform duration-500 
          md:ease-in-out 
          md:transform translate-x-0
          `
        }>
          <div className="z-30 md:h-auto md:flex text-left right-0 md:w-3/4 
           text-5xl text-yellow-400 md:text-yellow-200 sm:text-sm md:text-lg">
            <div className="w-3/4">
              <Link to="/contact">
                <p className="mt-4 table md:mb-0 hover:text-red-500 md:hover:text-white cursor-pointer">Contact</p>
              </Link>
            </div>
            <div className="w-1/2">
              <Link to="/faq">
                <p className="mt-4 table md:mb-0 hover:text-red-500 md:hover:text-white cursor-pointer">FAQ</p>
              </Link>
            </div>
            <div className="w-3/4">
              <Link to="/services">
                <p className="mt-4 table md:mb-0 hover:text-red-500 md:hover:text-white cursor-pointer">Services</p>
              </Link>
            </div>
            <div className="w-full">
              <Link to="/dupont">
                <p className="mt-4 table md:mb-0 hover:text-red-500 md:hover:text-white cursor-pointer">Assurance Of Quality</p>
              </Link>
            </div>
            <div className="w-full">
              <Link to="/goldclass">
                <p className="mt-4 table md:mb-0 hover:text-red-500 md:hover:text-white cursor-pointer">Gold Class</p>
              </Link>
            </div>
          </div>
        </div>
       
      </div>
  );
}

export default Navigation