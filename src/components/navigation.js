import React, { useState } from "react";
import logoSvg from '../images/4mlogo.svg'
import { MenuIcon } from '@heroicons/react/outline'
import { useElementOnScreen } from './scrolleffecthandler'
import { Link } from "gatsby"

const Navigation = ({navBackground}) => {
    const [open, setOpen] = useState(false);

    return (
      <div className={` bg-gray-900 w-full h-20 fixed z-10 transition duration-500 ease-in-out ${(navBackground  && !open || open  && navBackground || open  && !navBackground) ? "bg-opacity-90": "bg-opacity-0" } `}>
        <Link className = 
          {
            `h-10 transform absolute top-2/4 
            -translate-y-1/3 transition-transform 
            duration-500 ease-in-out 
            ${(navBackground  && !open || open  && navBackground || open  && !navBackground) ? "translate-x-8": "-translate-x-full" }` 
          }
          
          style={{zIndex: '1000'}}
          to="/"
        >
          <img className ="h-full w-full" src={logoSvg}></img>
        </Link>
        <div className={`z-30 w-full absolute left-0 top-0 grid grid-cols-2 text-xs md:text-sm font-san
                   ${(open && navBackground || navBackground && !open || open && !navBackground) ? "bg-yellow-300 text-black": "text-white"}
        `}
        >
          <p className="mb-0 font-sans">
            1663 N. Lapeer Rd. Oxford, MI
          </p>
          <p className=" mb-0 text-center font-sans">
            <span> Call:</span> <a href="tel:2485724844">248-572-4844</a>
          </p>
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
          <div className="z-30 md:h-auto md:flex text-left right-0 md:w-3/4 xl:w-2/5 text-5xl text-yellow-400 md:text-yellow-200 md:text-lg">
            <div className="w-full ">
              <p className="mt-4 table md:mb-0 hover:text-red-500 md:hover:text-white cursor-pointer">About</p>
            </div>
            <div className="w-full">
              <p className="mt-4 table md:mb-0 hover:text-red-500 md:hover:text-white cursor-pointer">Contact</p>
            </div>
            <div className="w-full">
              <p className="mt-4 table md:mb-0 hover:text-red-500 md:hover:text-white cursor-pointer">Estimates</p>
            </div>
            <div className="w-full">
              <p className="mt-4 table md:mb-0 hover:text-red-500 md:hover:text-white cursor-pointer">When To Call</p>
            </div>
            <div className ="mt-4 relative inline-block group w-full h-auto">
              <p className ="mb-0 text-2xl">Certified</p>
              <svg className="hidden" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              <div className="md:hidden absolute min-w-min group-hover:block md:bg-yellow-300 py-4 -right-0 top-6 w-full mt-6 md:mt-0 md:w-52 text-xs">
                <div className="w-full pl-2 md:hover:bg-yellow-500 hover:text-red-500 md:hover:text-white md:text-gray-900 cursor-pointer">
                  <p className="table md:mb-0 ">BASF</p>
                </div>
                <div className="w-full pl-2 md:hover:bg-yellow-500 hover:text-red-500 md:hover:text-white md:text-gray-900 cursor-pointer">
                  <p className="table md:mb-0 ">GOLD CLASS</p>
                </div>
                <div className="w-full pl-2 md:hover:bg-yellow-500 hover:text-red-500 md:hover:text-white md:text-gray-900 cursor-pointer">
                  <p className="table md:mb-0 ">ASSURANCE OF QUALITY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => { setOpen(!open);  }} 
          className ={
            open 
            ? 
              ` open text-yellow-400
                top-6 right-4  
                fixed z-50
                md:hidden
                hover:text-red-500`
            :
              ` text-yellow-400
                top-6 right-4  
                fixed z-30
                md:hidden
                hover:text-red-500`
          }
          style={{zIndex: '1000'}}
        >
          <div>
            <MenuIcon className="h-8 w-8"></MenuIcon>
          </div>
        </button>
      </div>
  );
}

export default Navigation