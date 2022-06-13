import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import autoRepairImage from "../images/auto-body-repair.jpg"
import bodyRepairImage from "../images/body-repair.jpg"
import bumperRepairImage from "../images/bumper-repair.jpg"
import hailRepairImage from "../images/Hail-Damage-Repair.png"
import paintRepairImage from "../images/paint-repair.jpg"
import dentRepairImage from "../images/paintless-dent.jpg"

const ServicesPage = () => (
  <Layout>
    <Seo title="Provided Collison Repair Services" />
    <div>
        <div className="w-11/12  mx-auto text-white font-sans">
            <div className="mb-14">
                <h1 className="text-yellow-300 text-center">REPAIR SERVICES</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center">
                <div className="w-11/12 mx-auto sm:max-w-sm">
                    <img className="sm:h-80 sm:w-80 object-cover lazyload transition-opacity duration-1000 ease-in-out opacity-0" src={paintRepairImage}></img>
                    <h3 className="text-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                        Body Paint Repair
                    </h3>
                    <p className="lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                        From touch ups to scratch repair and full auto body repaints, 4M Collision provides 
                        OEM quality automotive paint services.
                    </p>
                </div>     
                <div className="w-11/12 mx-auto sm:max-w-sm">
                    <img className="sm:h-80 sm:w-80 object-cover lazyload transition-opacity duration-1000 ease-in-out opacity-0" src={bodyRepairImage}></img>
                    <h3 className="text-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                        Auto Body Repair
                    </h3>
                    <p className="lazyload transition-opacity duration-1000 ease-in-out opacity-0 w-11/12 ">
                        We offer comprehensive auto body repair services, from repairing minor dents and dings to 
                        restoring the entire vehicle to pre-accident condition.
                    </p>
                </div>     
                <div className="w-11/12 mx-auto sm:max-w-sm">
                    <img className="w-full h-96 sm:h-80 sm:w-80 object-cover lazyload transition-opacity duration-1000 ease-in-out opacity-0" style={{backgroundImage: `url(${bumperRepairImage})`, backgroundSize: `cover`}}></img>
                    <h3 className="text-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                        Bumper Repair
                    </h3>
                    <p className="lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                        Remove dents, scratches and gouges from your bumper with bumper repair by 4M Collision.
                        Call & get an estimate today!
                    </p>
                </div>     
                <div className="w-11/12 mx-auto sm:max-w-sm">
                    <img className="sm:h-80 sm:w-80 object-cover lazyload transition-opacity duration-1000 ease-in-out opacity-0" src={autoRepairImage}></img>
                    <h3 className="text-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                        Fender Repair
                    </h3>
                    <p className="lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                        Local fender repair experts. Full-Service Repairs for all types of fender damage. 
                        Give us a call today.
                    </p>
                </div>     
                <div className="w-11/12 mx-auto sm:max-w-sm">
                    <img className="sm:h-80 sm:w-80 object-cover lazyload transition-opacity duration-1000 ease-in-out opacity-0" src={hailRepairImage}></img>
                    <h3 className="text-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                        Hail Damage Repair
                    </h3>
                    <p className="lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                        We perform hail damage repair and paintless dent removal in South Jersey. 
                        No matter what damage hail may have done to your car.
                    </p>
                </div>     
                <div className="w-11/12 mx-auto sm:max-w-sm">
                    <img className="sm:h-80 sm:w-80 object-cover lazyload transition-opacity duration-1000 ease-in-out opacity-0" src={dentRepairImage}></img>
                    <h3 className="text-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                        Paintless Dent Repair
                    </h3>
                    <p className="lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                        Paintless dent removal is the fastest, most effective, and cost-effective method 
                        of removing minor dents and creases from your vehicle.
                    </p>
                </div>
                <div className="relative col-span-1  w-11/12 mx-auto xl:max-w-sm sm:h-4/6 py-10 p-1 2xl:p-10 bg-white text-black  border-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0 mb-8 lg:mb-0" style={{border: `20px solid rgb(252, 211, 77)`}}>
                    <p className="lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                        If you're uncertain that we provide a service you're looking for, please reach out to us. 
                        More likely than not we will be able help you out.
                    </p>
                    <div className="relative w-11/12 max-w-sm mx-auto">
                        <button className="w-auto bg-yellow-300 before:bg-gray-800 hvr-sweep-to-right font-bold mx-auto px-4 font-sans rounded text-black hover:text-yellow-300 py-6 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                            <a href="tel:2485724844" className="lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                                Click To Call: 248-572-4844
                            </a>
                        </button> 
                    </div>
                </div>     
                <div className="relative col-span-1 mx-auto w-11/12 xl:max-w-sm sm:h-4/6 py-10 p-1 2xl:p-10 bg-white text-black  border-yellow-300 lazyload transition-opacity duration-1000 ease-in-out opacity-0 mb-8 lg:mb-0" style={{border: `20px solid rgb(252, 211, 77)`}}>
                    <p className="lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                        Calling us is the best way to have any questions or concerns answered. 
                        But in case you're looking to learn more now, Give a visit to our FAQ
                    </p>
                    <div className="relative w-11/12 max-w-sm mx-auto">
                        <Link to="/faq">
                            <button className="w-auto bg-yellow-300 before:bg-gray-800 hvr-sweep-to-right font-bold mx-auto px-4 font-sans rounded text-black hover:text-yellow-300 py-6 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                                Click for FAQ
                            </button> 
                        </Link>
                    </div>
                </div>     
            </div>
        </div>
    </div>
    
  </Layout>
)

export default ServicesPage