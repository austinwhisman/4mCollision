import * as React from "react"
import { Link } from "gatsby"
import goldClass from "../images/goldclass.png"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GoldClassPage = () => (
  <Layout>
    <Seo title="Gold Class" />
    
    <div className="grid grid-cols-1 order-last sm:order-first lg:grid-cols-2 font-sans">
      <div className ="w-3/4 relative left-16 pt-16 pb-8">
      <h1 className="text-yellow-300">Excellence through Training</h1>
        <p className ="text-white">
          I-Car provides training and certification standards for the collision repair 
          industry.  Working closely with the OEM sector, I-Car develops classes to teach 
          OEM approved repair procedures for the leading edge technology found in today's
          new cars and trucks.  I-Car's motto is Excellence Trough Training! 
        </p>
        <p className ="text-white">
          The I-Car Gold logo signifies that the technicians and shop owner have undergone 
          the most thorough training available in the collision repair industry. 
          When you see the I-Car Gold Class Professional signature, 
          you can be assured that the shop has the trained personnel necessary 
          to service your vehicle quickly, efficiently, and most importantly - properly.
        </p>
        <p className ="text-white">
          Thank you for choosing us for your collision repair needs. 
          We're glad to have you as a customer and appreciate the confidence you placed in us. 
          If you have any questions, Please don't hesitate to call us.  
          Our highly trained staff is here to serve you.
        </p>
      </div>
      <div className="relative order-first sm:order-last pb-8">
        <img className=" w-1/2 relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={goldClass}></img>
      </div>
    </div>
  </Layout>
)

export default GoldClassPage
