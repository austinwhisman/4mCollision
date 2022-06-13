import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import basflogo from "../images/basflogo.svg"
import dupontlogo from "../images/dupont-assurance.svg"
import kiaLogo from "../images/kia-certified.png"
import goldclasslogo from "../images/goldclass.png"
import redcar from "../images/red-car-trim.png"
import storeview from "../images/storeview.png"
import { Link } from "gatsby"




const IndexPage = () => {
  
 

return(
  <Layout>
    <Seo title="4M Collision Auto Repair Home" />
    <h1 className= "text-yellow-300 pl-6" >Our Goal</h1>
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 my-auto sm:mb-36 xl:mb-20">
        <div className=" w-full col-span-2 sm:max-h-96 md:col-span-1 pb-6 ">
          <div className="relative xl:w-5/6 xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-2/3 xl:-translate-y-2/3 xl:m-auto">
            <p className="text-white font-sans font-light text-lg md:text-base md:font-medium lg:text-xl lg:font-light pt-6 md:pt-8 pb-8 md:pb-0 lg:py-10 px-10 mb-0">
              The 4M Collision goal is to provide you with the best service
              in the collision repair industry.  The appearance and safety 
              of your vehicle is our focus.  Your satisfaction is guaranteed 
              at 4M Collision.
            </p>
            <p className="text-white font-sans font-light text-lg md:text-base md:font-medium lg:text-xl lg:font-light mt-8 mb-0 px-10 lg:my-0 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
              4M Collision offers everything from collision, 
              restorations to custom paint. also providing free rental cars on all 
              major repairs. we also work with all major insurance companies along 
              with special pricing on all customer out of pocket repairs. 
            </p>
          </div>
        </div>
        <div className=" w-full col-span-2 sm:max-h-96 md:col-span-1 pb-6 ">
          <div className="relative xl:w-5/6 xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-2/3 xl:-translate-y-2/3 xl:m-auto">
            <img className="relative mx-auto md:top-16 lazyload transition-opacity duration-1000 ease-in-out opacity-0" src={redcar}></img>
              <div>
                <div className="mx-auto w-max">
                  <Link to="/services">
                    <button  className="hvr-sweep-to-right font-bold py-2 px-4 rounded text-gray-800 hover:bg-white hover:text-yellow-300 relative bottom-8 lg:bottom-16">
                      Click to see services
                    </button>
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="w-full  object-contain grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 font-sans text-center">
        <div className="w-full lg::w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 col-span-1 sm:col-span-2 md:col-span-4 lg:mb-20 items-center justify-center">
            <div  className="col-span-1 md:col-span-2 lg:col-span-1">
              <img className ="my-0 lazyload transition-opacity duration-1000 ease-in-out opacity-0" src={storeview}/>
            </div>
            <div className ="bg-white md:bg-transparent pt-6 md:bg-opacity-80 pb-8 col-span-1 md:col-span-2 lg:col-span-1">
              <h1 className="md:text-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0" >
                Why us?
              </h1>
              <div className="relative m-auto max-w-5xl text-left font-semibold">
                <p className="md:text-white font-sans text-lg md:text-base md:font-medium lg:text-xl lg:font-light pt-6 md:pt-8 pb-8 md:pb-0 lg:py-10 px-10 mb-0 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                  Your car is the second largest investment you're likely to make. 
                  Preserve its value and your safety by having it repaired professionally.
                  Our team uses top of the line unibody repair equipment, and has the experience and certifications to do the repair right.
                </p>
                <p className="md:text-white font-sans text-lg md:text-base md:font-medium lg:text-xl lg:font-light mt-8 px-10 mb-0 md:mb-12 lg:my-0 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                  Always remember your rights. Your insurance company cannot require you to go to a particular shop, and cannot force you to have your car appraised multiple times.
                  We would love to have your business, and we will help you negotiate your claim with the insurance company. 4M Collision accept all insurance claims. 
                </p>
                <div className="w-3/4 max-w-xs mx-auto mt-12">
                  <button className="relative w-full bg-yellow-300 before:bg-gray-800 hvr-sweep-to-right font-bold px-4 font-sans rounded text-black hover:text-yellow-300 py-6 lazyload transition-opacity duration-1000 ease-in-out opacity-0 ">
                      <a href="tel:2485724844" className=" lazyload transition-opacity duration-1000 ease-in-out opacity-0 mx-auto">
                          Click To Call: 248-572-4844
                      </a>
                  </button> 
                    </div>
              </div>
            </div>
          </div>
          <div className ="bg-gray-800 pt-6 bg-opacity-80">
            <h2 className="text-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
              Quality
            </h2>
            <p className="text-white w-3/4 mx-auto lazyload transition-opacity duration-1000 ease-in-out opacity-0">
              Repairs done right, with the best sourced parts.
            </p>
          </div>
          <div className ="bg-gray-800 pt-6 bg-opacity-80">
            <h2 className="text-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
              Integrity
            </h2>
            <p className="text-white w-3/4 mx-auto lazyload transition-opacity duration-1000 ease-in-out opacity-0">
              We stand by our work and will help guide you through this process.
            </p>
          </div>
          <div className ="bg-gray-800 pt-6 bg-opacity-80">
            <h2 className="text-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
              Expertise
            </h2>
            <p className="text-white w-3/4 mx-auto lazyload transition-opacity duration-1000 ease-in-out opacity-0">
              We have been a community trusted name for over 25 years
            </p>
          </div>
          <div className ="bg-gray-800 pt-6 bg-opacity-80">
            <h2 className="text-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
              Certified
            </h2>
            <p className="text-white w-3/4 mx-auto lazyload transition-opacity duration-1000 ease-in-out opacity-0">
              At 4M Collision we don't just talk about doing good work. We have the credentials
            </p>
          </div>
      </div>
     
    </div>
    
  </Layout>
)
}

export default IndexPage
