import * as React from "react"
import tools from '../images/tools.png'
import Layout from "../components/layout"
import Seo from "../components/seo"
import basflogo from "../images/basflogo.svg"
import dupontlogo from "../images/dupont-assurance.svg"
import goldclasslogo from "../images/goldclass.png"
import carPhoto from "../images/car-top-view2.jpg"
import { Link } from "gatsby"

const IndexPage = () => (
  
  <Layout>
    <Seo title="Home" />
    <h1 className= "text-yellow-300 pl-6" >Our Goal</h1>
    <div className="w-full">
      <div className="grid md:grid-cols-2 my-auto mb-0">
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
        <div className="w-full col-span-2 md:col-span-1 max-h-96 hidden">
          <img alt ="" className="mb-0 w-full h-full object-cover" src={tools}></img>
        </div>
        <div className="w-full col-span-2 text-left pl-6 text-yellow-300">
          <h1>
            Certified
          </h1>
        </div>
        <div className="w-full object-contain col-span-2 grid md:grid-cols-3 font-sans">
          <div className="w-full bg-red-900 bg-opacity-80 min-h-19 md:h-auto">
            <img alt="BASF Chemistry Logo" className="w-2/3 h-2/3 max-h-96 mt-8 object-cover mx-auto text-white" src={basflogo}></img>
            <div className="mx-auto w-max">
              <button className="hvr-sweep-to-right font-bold py-2 px-4 rounded text-black hover:text-yellow-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full bg-yellow-300 bg-opacity-80 min-h-19 md:h-auto">
            <img alt ="Du Pont Assurance Of Quality" className="w-2/3 h-2/3 max-h-96 mt-8 object-scale-down mx-auto" src={dupontlogo}></img>
            <div className="mx-auto w-max">
              <button  className="hvr-sweep-to-right bg-gray-800 font-bold py-2 px-4 rounded text-white hover:bg-white hover:text-gray-800">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full bg-opacity-80 min-h-19 md:h-auto" style={{backgroundColor: '#272626' }}>
            <img alt ="Gold Class I-CAR logo" className="w-2/3 h-2/3 max-h-96 mt-8 object-scale-down mx-auto" src={goldclasslogo}></img>
            <div className="mx-auto w-max">
              <Link to="page-2">
                <button className="hvr-sweep-to-right font-bold py-2 px-4 rounded bg-red-900 text-white hover:text-red-900 hover:bg-white">
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
