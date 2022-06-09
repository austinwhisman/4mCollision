import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import basflogo from "../images/basflogo.svg"
import dupontlogo from "../images/dupont-assurance.svg"
import kiaLogo from "../images/kia-certified.png"
import goldclasslogo from "../images/goldclass.png"
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
            <p className="text-white font-sans font-light text-lg md:text-base md:font-medium lg:text-xl lg:font-light my-8 px-10 mb-12 lg:my-0">
              4M Collision offers everything from collision, 
              restorations to custom paint. also providing free rental cars on all 
              major repairs. we also work with all major insurance companies along 
              with special pricing on all customer out of pocket repairs. 
            </p>
          </div>
        </div>
        
      </div>
        <div className="w-full  object-contain grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 font-sans text-center">
            <div className="col-span-1 sm:col-span-2 md:col-span-4">
              <div className ="bg-white md:bg-gray-800 pt-6 md:bg-opacity-80 pb-8">
                <h1 className="md:text-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0" >Why us?</h1>
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
                </div>
              </div>
            </div>
            <div className ="bg-gray-800 pt-6 bg-opacity-80">
              <h2 className="text-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0">Quality</h2>
              <p className="text-white w-3/4 mx-auto lazyload transition-opacity duration-1000 ease-in-out opacity-0">Repairs done right, with the best sourced parts.</p>
            </div>
            <div className ="bg-gray-800 pt-6 bg-opacity-80">
              <h2 className="text-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0">Integrity</h2>
              <p className="text-white w-3/4 mx-auto lazyload transition-opacity duration-1000 ease-in-out opacity-0">We stand by our work and will help guide you through this process.</p>
            </div>
            <div className ="bg-gray-800 pt-6 bg-opacity-80">
              <h2 className="text-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0">Expertise</h2>
              <p className="text-white w-3/4 mx-auto lazyload transition-opacity duration-1000 ease-in-out opacity-0">We have been a community trusted name for over 25 years</p>
            </div>
            <div className ="bg-gray-800 pt-6 bg-opacity-80">
              <h2 className="text-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0">Certified</h2>
              <p className="text-white w-3/4 mx-auto lazyload transition-opacity duration-1000 ease-in-out opacity-0">At 4M Collision we don't just talk about doing good work. We have the credentials</p>
            </div>
        </div>
        <div className="w-full object-contain col-span-2 grid md:grid-cols-4 font-sans bg-white">
          <div className="w-full  min-h-19 md:h-auto ">
          <img alt ="Kia Recognized Collision Repair Center" className="lazyload transition-opacity duration-1000 ease-in-out opacity-0 w-2/3 h-2/3 max-h-96 mt-8 object-scale-down mx-auto" src={kiaLogo}></img>
            <div className="mx-auto w-max">
            <Link to="/dupont">
                <button  className="hvr-sweep-to-right font-bold py-2 px-4 rounded text-gray-800 hover:bg-white hover:text-yellow-300 ">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="w-fullmin-h-19 md:h-auto">
            <img  alt="BASF Chemistry Logo" className="lazyload transition-opacity duration-1000 ease-in-out opacity-0 w-2/3 h-2/3 max-h-96 mt-8 object-cover mx-auto text-white" src={basflogo}></img>
            <div className="mx-auto w-max">
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
      
    </div>
    
  </Layout>
)
}

export default IndexPage
