import * as React from "react"
import tools from '../images/tools.png'
import Layout from "../components/layout"
import Seo from "../components/seo"
import basflogo from "../images/basflogo.svg"
import dupontlogo from "../images/dupont-assurance.svg"
import goldclasslogo from "../images/goldclass.png"
import carPhoto from "../images/car-top-view2.jpg"
import kiaLogo from "../images/kia-certified.png"
import { Link } from "gatsby"

const IndexPage = () => (
  
  <Layout>
    <Seo title="Home" />
    <h1 className= "text-yellow-300 pl-6" >Our Goal</h1>
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 my-auto mb-0">
        <div className=" w-full col-span-2 sm:max-h-96 md:col-span-1 pb-6">
          <div className="relative xl:w-5/6 xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-2/3 xl:-translate-y-2/3 xl:m-auto">
            <p className="text-white font-sans font-light text-lg md:text-base md:font-medium lg:text-xl lg:font-light pt-6 md:pt-8 pb-8 md:pb-0 lg:py-10 px-10 mb-0">
              The 4M Collision goal is to provide you with the best service
              in the collision repair industry.  The appearance and safety 
              of your vehicle is our focus.  Your satisfaction is guaranteed 
              at 4M Collision.
            </p>
            <p className="text-white font-sans font-light text-lg md:text-base md:font-medium lg:text-xl lg:font-light my-8 px-10 mb-12 lg:my-0">
              4m collision offers everything from collision, 
              restorations to custom paint. also providing free rental cars on all 
              major repairs. we also work with all major insurance companies along 
              with special pricing on all customer out of pocket repairs. 
            </p>
          </div>
        </div>
        
        <div className="w-full object-contain col-span-2 grid md:grid-cols-4 font-sans text-center">
            <div>
              <h2 className="text-yellow-300">Quality</h2>
              <p className="text-white w-3/4 mx-auto">Repairs done right, with the best sourced parts.</p>
            </div>
            <div>
              <h2 className="text-yellow-300">Integrity</h2>
              <p className="text-white w-3/4 mx-auto">We stand by our work and will help guide you through this process.</p>
            </div>
            <div>
              <h2 className="text-yellow-300">Expertise</h2>
              <p className="text-white w-3/4 mx-auto">We have been a community trusted name for over 25 years</p>
            </div>
            <div>
              <h2 className="text-yellow-300">Certified</h2>
              <p className="text-white w-3/4 mx-auto">At 4mCollision we don't just talk about doing good work. We have the credentials</p>
            </div>
        </div>

        <div className="w-full object-contain col-span-2 grid md:grid-cols-4 font-sans bg-white">
          
          <div className="w-full  min-h-19 md:h-auto">
          <img alt ="Kia Recognized Collision Repair Center" className="w-2/3 h-2/3 max-h-96 mt-8 object-scale-down mx-auto" src={kiaLogo}></img>
            <div className="mx-auto w-max">
            <Link to="/dupont">
                <button  className="hvr-sweep-to-right font-bold py-2 px-4 rounded text-gray-800 hover:bg-white hover:text-yellow-300 ">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="w-fullmin-h-19 md:h-auto">
            <img alt="BASF Chemistry Logo" className="w-2/3 h-2/3 max-h-96 mt-8 object-cover mx-auto text-white" src={basflogo}></img>
            <div className="mx-auto w-max">
            </div>
          </div>
          <div className="w-full min-h-19 md:h-auto">
            <img alt ="Du Pont Assurance Of Quality" className="w-2/3 h-2/3 max-h-96 mt-8 object-scale-down mx-auto" src={dupontlogo}></img>
            <div className="mx-auto w-max">
              <Link to="/dupont">
                <button  className="hvr-sweep-to-right font-bold py-2 px-4 rounded text-gray-800 hover:bg-white hover:text-yellow-300 ">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full min-h-19 md:h-auto">
            <img alt ="Gold Class I-CAR logo" className="w-2/3 h-2/3 max-h-96 mt-8 object-scale-down mx-auto" src={goldclasslogo}></img>
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
    </div>
    
  </Layout>
)

export default IndexPage
