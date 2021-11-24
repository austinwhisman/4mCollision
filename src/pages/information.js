import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const InformationPage = () => (
  <Layout>
    <Seo title="DuPont Assurance of Quality" />
    <div>
       <div>
           <div>
               <h3 className="text-yellow-300">Ten Things To Know Before Having Your Car Repaired.</h3>
           </div>
           <div className="text-white list w-3/5 mx-auto p-8 bg-black bg-opacity-75">
               <ol style={{listStyle: 'auto'}}>
                   <li className="my-8">
                        Your car is the second largest investment you're likely to make.   Preserve its value and your safety by having it repaired professionally.
                   </li>
                   <li className="my-8">
                        Never drive a car that could be unsafe because of damages.
                   </li>
                   <li className="my-8">
                        Some insurance companies may want you to visit their drive-in claims center before having your car repaired.  
                        You can do this, or you can leave your car at our shop and ask that the insurance company inspect the car here.
                   </li>
                   <li className="my-8">
                        You are not required by law to obtain more than one estimate or appraisal.
                   </li>
                   <li className="my-8">
                        You have the right to go to the repair shop of your choice. 
                        Your insurance company cannot require you to go to a particular shop.
                   </li>
                   <li className="my-8">
                        Differences in repair estimates are common. A lower estimate may not include all necessary work. 
                        If you're not sure why one estimate is different from another you've received, please ask us.
                   </li>
                   <li className="my-8">
                        Choose a shop that has unibody repair equipment and certified (by I-CAR or ASE, for example) technicians.
                   </li>
                   <li className="my-8">
                        Ask if the shop will be using genuine manufacturer (OEM) replacement parts.
                   </li>
                   <li className="my-8">
                        Ask if the shop offers a repair warranty.
                   </li>
                   <li className="my-8">
                        We can help you negotiate your claim with the insurance company.
                   </li>
               </ol>
           </div>
        </div> 
    </div>
    
  </Layout>
)

export default InformationPage