import * as React from "react"
import { Link } from "gatsby"
import goldClass from "../images/goldclass.png"
import kia1 from "../images/kia-1.jpg"
import kia2 from "../images/kia-2.jpg"
import kia3 from "../images/kia-3.jpg"
import Layout from "../components/layout"
import Seo from "../components/seo"

const KiaPage = () => (
  <Layout>
    <Seo title="Gold Class" />
    
    <div className="grid grid-cols-1 lg:grid-cols-2 font-sans pt-16">
        <div className="mx-auto w-full lg:w-11/12 col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 lg:bg-white items-center justify-center border-none lg:mb-36 lg:rounded-3xl">
            <div className ="w-11/12 lg:w-3/4 col-span-1 mx-auto py-4 font-semibold">
                <h1 className="lg:text-red-800 text-yellow-300">Kia Certified</h1>
                <p className ="text-white lg:text-black">
                    Getting back on the road after an accident first means dropping your 
                    Kia off at a local body shop. But do you know whether that auto body 
                    shop is certified or not? Since many automotive manufacturers have 
                    their own guidelines and parts for repairs, choosing the right auto 
                    body shop can change the entire experience for the better.
                </p>
                <p className ="text-white lg:text-black lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                    That means that, when your Kia is damaged in a collision, 
                    you should go to a Kia Recognized Collision Repair Center 
                    like 4M Collision. Only then will you get the right 
                    parts and high-quality work.
                </p>
            </div>
            <div className="relative w-full h-full mx-auto">
                <img className="w-full h-full mb-0 relative lazyload transition-opacity duration-1000 ease-in-out opacity-0 lg:rounded-r-3xl" src={kia2}></img>
            </div>
        </div>
        <div className="mx-auto w-full col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2">
            <div className="relative w-full h-full object-cover">
                <img className="w-full h-full mb-0 object-cover relative lazyload transition-opacity duration-1000 ease-in-out opacity-0 ml-auto" style={{maxHeight: "630px"}} src={kia3}></img>
            </div>
            <div class="w-full relative pt-16 text-white bg-black mr-auto">
                <div>
                    <h1 className="text-yellow-300 text-center lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                        Benifits Of Kia Certified
                    </h1>
                        <p className="p-2 bg-gray-800 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                            Kia Genuine Parts – we will only use Kia parts that come from the 
                            Original Equipment Manufacturer (OEM)
                        </p>
                        <p className=" p-2 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                            Commitment to repair your Kia to factory specifications with our 
                            rigorous workmanship standards – guaranteed to be returned to pre-accident 
                            appearance, function and performance
                        </p>
                        <p className="p-2 bg-gray-800 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                            Requirement to have the latest Kia tools, equipment and technology to repair
                            your vehicle properly
                        </p>
                        <p className="p-2 lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                            Kia Specific Training – our well trained, expert staff participate in ongoing 
                            training and education from I-CAR, an industry training standard, and complete 
                            supplemental advanced training specific to Kia vehicles. This ensures that they 
                            are up to date on proper repair techniques and all the newest Kia technology
                        </p>
                </div>
            </div>
        </div>
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2">
            <div className="w-full ml-auto relative lg:pt-16 mx-auto lg:border-8 lg:border-yellow-300 bg-white lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                <div className="relative w-11/12 mx-auto">
                    <h1 className="mt-8 text-red-800 lazyload transition-opacity duration-1000 ease-in-out opacity-0">Lets Connect</h1>
                    <p className ="lazyload transition-opacity duration-1000 ease-in-out opacity-0">
                        Thank you for choosing us for your collision repair needs. 
                        We're glad to have you as a customer and appreciate the confidence you placed in us. 
                        If you have any questions, Please don't hesitate to call us.  
                        Our highly trained staff is here to serve you.
                    </p>
                    <div className="w-3/4 max-w-xs mx-auto">
                        <button className="relative w-full bg-yellow-300 before:bg-gray-800 hvr-sweep-to-right font-bold px-4 font-sans rounded text-black hover:text-yellow-300 py-6 lazyload transition-opacity duration-1000 ease-in-out opacity-0 mb-12">
                            <a href="tel:2485724844" className=" lazyload transition-opacity duration-1000 ease-in-out opacity-0 mx-auto text-red-800" >
                                Click To Call: 248-572-4844
                            </a>
                        </button> 
                    </div>
                </div>
            </div>
            <div className="order-first lg:order-last my-0 mr-auto">
                <img className="h-full w-full objcet-cover mb-0 relative mx-auto" src={kia1}></img>
            </div>
        </div>
    </div>
  </Layout>
)

export default KiaPage
