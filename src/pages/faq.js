import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const FaqPage = () => (
  <Layout>
    <Seo title="DuPont Assurance of Quality" />
    <div>
       <div>
           <div>
               <h3 className="text-yellow-300">Ten Things To Know Before Having Your Car Repaired.</h3>
           </div>
           <div className="text-white list w-3/5 mx-auto p-8 bg-black bg-opacity-75">
               <div>
                   <div>
                       <h4>
                            Do I have to go to my insurance company's drive-in claims center for an estimate?  
                       </h4>
                   </div>
                   <div>
                       <p>
                            No.  If you want 4M Collision to repair your vehicle, bring your damaged vehicle directly to 4M Collision.  
                            We are authorized by the insurance companies to write their estimates.  
                       </p>
                       <p>
                            Unlike the drive in claims center, 4M Collision can open hoods and unexposed areas to explore for hidden damage.  
                            Therefore, the estimate you receive from 4M Collision is more accurate.  In many cases your insurance company 
                            will approve our estimate over the phone, which allows us to start the repair process immediately.
                       </p>
                   </div>
               </div>
               <div>
                   <div>
                       <h4>
                            Do I have to go to my insurance company's drive-in claims center for an estimate?  
                       </h4>
                   </div>
                   <div>
                       <p>
                            Yes.  As long as the shop can relate directly the problem to the original accident, your insurance company will pay for the additional repair.
                       </p>
                   </div>
               </div>
           </div>
        </div> 
    </div>
    
  </Layout>
)

export default FaqPage