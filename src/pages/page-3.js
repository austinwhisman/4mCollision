import * as React from "react"
import { Link } from "gatsby"
import dupontlogo from "../images/dupont-assurance.svg"
import Accordion from "../components/accordion"
import Layout from "../components/layout"
import Seo from "../components/seo"

const DupontPage = () => (
  <Layout>
    <Seo title="DuPont Assurance of Quality" />
    <h1 className="text-yellow-300 relative pl-4 pt-20">Excellence through Training</h1>
    <div className="grid grid-cols-1 order-last sm:order-first lg:grid-cols-2 font-sans pb-16">
        <div className ="w-full mx-auto md:w-3/4 relative">
            <div className="relative px-8 pt-8 py-16">
                <p className ="text-white w-full xl:w-3/4">
                    Assurance of Quality (AOQ) is a unique program. 
                    DuPont provides the AOQ affiliation to only an elite group of collision centers.  
                    A collision center must exhibit professional management skills and employ 
                    highly qualified technicians to become a DuPont AOQ Partner.
                </p>
                <p className ="text-white w-full xl:w-3/4">
                    It's an honor to be a DuPont Assurance of Quality shop.  
                    We believe DuPont provides our customers a superior value.
                </p>
            </div>
            <div className="relative px-8 md:pl-8 md:pb-16">
                <h3 className="text-yellow-300 text-xl md:text-2xl ">
                    With DuPont You can look forward to    
                </h3>
                <ul className ="relative text-white pl-4 pb-8 md:pb-16 text-left">
                    <li className="ml-4">
                        A Comprehensive Warranty Backed By DuPont
                    </li>
                    <li className="ml-4">
                        Nation Wide Service Network
                    </li>
                    <li className="ml-4">
                        Refinish Center Certification Criteria
                    </li>
                </ul>
            </div>
        </div>
        <div className="relative order-first lg:order-last mb-16">
            <div className="w-2/3 sm:w-1/2 lg:w-2/3 mx-auto pt-14">
                <a href="https://www.dupont.com/industries/automotive.html" rel="noreferrer noopener" target="_blank">
                    <img className="" src={dupontlogo}></img>
                </a>
            </div>
        </div>
    </div>
    <div className="bg-gray-900 ">
        <div className="mx-auto grid grid-cols-1 order-last sm:order-first font-sans mb-16">
            <h1 className="text-yellow-300 relative pl-4 pt-8 mb-16">
                Limited Five Year Warranty
            </h1>
            <div className="w-11/12 xl:w-3/4 max-w-4xl mx-auto text-white">
                <Accordion
                title="Terms of the Warranty"
                content="
                    <ol> 	
                        <li>
                            The Certified Refinisher subject to this warranty shall mean the DuPont certified body shop which performed the original repair as shown 
                            by the Assurance Of Quality Certificate.	
                        </li>
                        <li>
                            Subject to the terms and conditions of this limited warranty, the Certified Refinisher agrees to warrant against the Covered Defects set forth below.   
                            The Certified Refinisher Warranty will be effective on the date the work was completed (as shown on the Assurance of Quality Certificate) and will continue for a five (5) year period.	
                        </li>
                        <li>
                            If the defect is determined to be a Covered Defect, the defect will be repaired without charge to the customer by the Certified Refinisher.	
                        </li>
                        <li>
                            Customer must follow the claim procedures set forth below in order to be covered by this warranty for any and all defect claims.
                        </li>	
                    </ol>"
                />
                <Accordion
                title="Scope of the Warranty"
                content="
                    <ol> 	
                        <li>
                            Apply only to the surfaces directly repaired with DuPont Paint Systems.
                        </li>
                        <li> 
                            Not apply to any Covered Defect which is directly the result of any negligence by the customer.
                        </li>
                        <li>
                            Only be available to the individual who was the owner of the vehicle at the time the original work was performed and whose name appears on the 
                            Assurance of Quality Certificate.  (The warranty is not transferable.)
                        </li>
                    </ol>"
                />
                <Accordion
                title="Covered Defects And Exclusions"
                content="
                <h3>Covered Defects shall include only the following list of defects.</h3>
                    <ol> 	
                        <li>
                            Cracking
                        </li>
                        <li>
                            Checking
                        </li>
                        <li>
                            Severe loss of gloss caused by cracking or fading.
                        </li>
                        <li>
                            Peeling of the topcoat or any of the layers of film included in the refinishing process.
                        </li>	
                    </ol>
                    <h3>Covered Defects shall not include other defects including but not limited to:</h3>
                    <ol> 	
                        <li>
                            Previously repainted or repaired OEM finishes (prior to issue of the Assurance of Quality Certificate), 
                            unless vehicle was stripped to bare substrate.
                        </li>
                        <li>
                            System failure due to pre-existing rust or rust originating from within the autobody. 
                            This includes blemishes or blistering caused by the rust.
                        </li>
                        <li>
                            Scratches, abrasions or stone chips caused intentionally or accidentally.
                        </li>
                        <li>
                            Damages caused by accidents.
                        </li>
                        <li>
                            Damage to the paint caused by improper abrasive detergents or waxes, 
                            acid rain or industrial emissions of volatile or corrosive substances.
                        </li>		
                    </ol>"
                />
                <Accordion
                title="What is the Procedure for Claims?"
                content="
                    <ol> 	
                        <li>
                            The warranty holder must submit this warranty, the Assurance of Quality Certificate and the vehicle for inspection to the Certified Refinisher 
                            where the vehicle was originally repaired.
                        </li>
                        <li>
                            An inspection will be provided free of charge by the Certified Refinisher and a DuPont Refinish Representative. 
                            After inspection and verification of a Covered Defect, the defect will be repaired by your Certified Refinisher free of charge to the customer.
                        </li>
                    </ol>"
                />
            </div>
        </div>
        <div className="font-sans pt-16 bg-yellow-300"> 
            <div className="">
                <h1 className="text-gray-900 relative pl-4 pb-16"> 
                    Definitions
                </h1>
                <ul className="text-white w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    <div className="w-full mx-auto bg-gray-900 pt-8 md:py-8 px-8 mb-8 md:my-8 md:col-span-2 xl:col-span-1">
                        <h3 className="text-yellow-300 left-4 ">
                            Assurance of Quality Certificate
                        </h3>
                        <li className="mb-16 ml-4">
                            <p>
                                Assurance of Quality Certificate shall mean the document which is given to the 
                                vehicle owner by the Certified Refinisher at the time of the original repair.
                            </p> 
                            <p>
                                The Assurance of Quality Certificate includes the name and location of the 
                                DuPont refinisher; the date of the repair; the areas repaired on the vehicle; 
                                the paint system used by the DuPont Refinisher; customer name; vehicle 
                                identification number; vehicle model and the repair order number.
                            </p>
                        </li>
                    </div>
                    <div className="w-full md:w-11/12 mx-auto bg-gray-900 py-8 px-8 my-8">
                        <h3 className="text-yellow-300">
                            DuPont Basecoat/Clearcoat Paint System
                        </h3>
                        <li className="mb-16 ml-4">
                            DuPont Basecoat/Clearcoat Paint System shall mean ChromaBase, or ChromaPremier BaseCoat.
                        </li>
                    </div>
                    <div className="w-full mx-auto bg-gray-900 py-8 px-8 my-8">
                        <h3 className="text-yellow-300">
                            DuPont Single Stage Paint System
                        </h3>
                        <li className="mb-8 ml-4">
                            DuPont Single Stage Paint System shall mean ChromaOne Single Stage, or ChromaPremier Single Stage.
                        </li>
                    </div>
                </ul>
            </div>
            <div className="bg-gray-800 relative">   
                <div className="w-11/12 mx-auto text-yellow-300 font-medium py-2 text-center">
                    <p className="mx-auto my-2">
                        This warranty gives you specific legal rights, 
                        and you may have other rights which vary from state to state. 
                        All mechanical copies of this warranty are null and void.
                    </p>
                </div>
            </div>
        </div>
    </div>
    
  </Layout>
)

export default DupontPage