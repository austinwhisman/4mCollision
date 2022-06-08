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
        <div className="w-11/12 max-w-7xl mx-auto text-white font-sans">
            <div className="mb-14">
                <h1 className="text-yellow-300 text-center">REPAIR SERVICES</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <img className="sm:h-80 sm:w-80 object-cover" src={paintRepairImage}></img>
                    <h3 className="text-yellow-300">Body Paint Repair</h3>
                    <p>
                        From touch ups to scratch repair and full auto body repaints, 4mCollision provides OEM quality automotive paint services.
                    </p>
                </div>     
                <div>
                    <img className="sm:h-80 sm:w-80 object-cover" src={bodyRepairImage}></img>
                    <h3 className="text-yellow-300">Auto Body Repair</h3>
                    <p>
                        We offer comprehensive auto body repair services, from repairing minor dents and dings to restoring the entire vehicle to pre-accident condition.
                    </p>
                </div>     
                <div>
                    <img className="w-full h-96 sm:h-80 sm:w-80 object-cover" style={{backgroundImage: `url(${bumperRepairImage})`, backgroundSize: `cover`}}></img>
                    <h3 className="text-yellow-300">Bumper Repair</h3>
                    <p>
                        Remove dents, scratches and gouges from your bumper with bumper repair by 4mCollision. Call & get an estimate today!
                    </p>
                </div>     
                <div>
                    <img className="sm:h-80 sm:w-80 object-cover" src={autoRepairImage}></img>
                    <h3 className="text-yellow-300">Fender Repair</h3>
                    <p>
                        Local fender repair experts. Full-Service Repairs for all types of fender damage. Give us a call today.
                    </p>
                </div>     
                <div>
                    <img className="sm:h-80 sm:w-80 object-cover" src={hailRepairImage}></img>
                    <h3 className="text-yellow-300">Hail Damage Repair</h3>
                    <p>
                        We perform hail damage repair and paintless dent removal in South Jersey. No matter what damage hail may have done to your car.
                    </p>
                </div>     
                <div>
                    <img className="sm:h-80 sm:w-80 object-cover" src={dentRepairImage}></img>
                    <h3 className="text-yellow-300">Paintless Dent Repair</h3>
                    <p>
                        Paintless dent removal is the fastest, most effective, and cost-effective method of removing minor dents and creases from your vehicle.
                    </p>
                </div>
                <div className="col-span-1 sm:col-span-2 sm:h-4/6 p-10 bg-white text-black  mx-auto border-yellow-300" style={{border: `20px solid rgb(252, 211, 77)`}}>
                <p>If you're uncertain that we provide a service you're looking for, please reach out to us. 
                   More likely than not we will be able help you out.
                </p>
                <button className=" bg-yellow-300 before:bg-gray-800 hvr-sweep-to-right w-auto font-bold mx-auto px-4 font-sans rounded text-black hover:text-yellow-300 py-6">
                    <a href="tel:2485724844">
                        Click To Call: 248-572-4844
                    </a>
                </button> 
            </div>     
            </div>
            
        </div> 
    </div>
    
  </Layout>
)

export default ServicesPage