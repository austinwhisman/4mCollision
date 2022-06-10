import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Accordion from "../components/accordion"
import Seo from "../components/seo"

const FaqPage = () => (
  <Layout>
    <Seo title="DuPont Assurance of Quality" />
    <div>
       <div>
           <div className="w-11/12 xl:w-3/4 max-w-4xl mx-auto font-sans">
               <h2 className="text-white">
                    When you work with us, we can always promise you three things. 
                    <span className="text-yellow-300"> Quality, Integrity, and Expertise.</span>
                </h2>
                <div className="p-4">
                    <p className="text-white text-lg ml-3">
                        4mCollision has been in business of performing and conducting difficult repairs for over 25 years. During our time being in business 
                        we have been trusted to do work for Emergency-Response vehicles, Commercial vehicles, Collectors, and people like you! 
                    </p>
                    <p className="text-white text-lg ml-3">
                        We hope this page can answer any questions you may have. If you have any questions that haven't been answered on this page,
                        please give us a call at 
                        <a className="text-yellow-300 text-2xl" href="tel:2485724844"> 248-572-4844</a>
                    </p>
                </div>
           </div>
           <div className="mx-auto grid grid-cols-1 order-last sm:order-first font-sans mb-16">
                <div className="w-11/12 xl:w-3/4 max-w-4xl mx-auto" >
                    <h3 className="text-yellow-300 text-center">Questions To Know Before Having Your Car Repaired.</h3>
                </div>   
                <div className="w-11/12 xl:w-3/4 max-w-4xl mx-auto text-white">
                    <Accordion
                        title="How can I get an Estimate?"
                        content="
                        <div>
                            <div>
                            <p>
                                It's as simple as giving us a call at <a className='text-yellow-300 text-2xl' href='tel:2485724844'> 248-572-4844</a>!
                            </p>
                            <p>
                                We're open Monday Through Friday 8am-5pm. Give us a call to schedule a time with one of our friendly estimators to give you a hand.
                            </p>
                            </div>
                        </div>"
                    />
                    <Accordion
                        title="Do I have to go to my insurance company's drive-in claims center for an estimate?"
                        content="
                        <div>
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
                        </div>"
                    />
                    <Accordion
                        title="Am I covered for accident damages after the initial repairs are completed?"
                        content="
                        <div>
                            <div>
                                <p>
                                    Yes.  As long as the shop can relate directly the problem to the original accident, your insurance company will pay for the additional repair.
                                </p>
                            </div>
                        </div>"
                    />
                    <Accordion
                        title="What is a DRP shop?"
                        content="
                        <div>
                            <div>
                                <p>
                                    DRP is an acronym, direct repair program.  Many insurance companies have similar programs.  
                                    4M Collision is working currently with several DRP's. You need to know that you have the right to go to the repair shop of your choice. 
                                    Your insurance company cannot require you to go to a particular DRP shop.
                                </p>
                            </div>
                        </div>"
                    />
                    <Accordion
                        title="Will I save money if I go to a DRP shop?"
                        content="
                        <div>
                            <div>
                                <p>
                                    No. Participating DRP collision centers must give a discount on their labor and parts to the insurance company. They make more profit. 
                                    The owner of the vehicle receives no discount. Participating DRP shops are promised more referrals. The DRP shop must provide the same 
                                    service as a non-participating DRP shop but must do the work for less money.
                                </p>
                            </div>
                        </div>"
                    />
                    <Accordion
                        title="What type of information should I tell the estimator?"
                        content="
                        <div>
                            <div>
                                <ol>
                                    <li>How many people where in the car at the time of the accident?</li>
                                    <li>Where were the passengers sitting at the time of the accident?</li>
                                    <li>Could you drive the vehicle after the accident?  If yes, did it have any noticeable problems?</li>
                                    <li>What gear was the vehicle's transmission set in at the time of the accident (park, neutral, drive, reverse)?</li>
                                </ol>
                            </div>
                        </div>"
                    />
                    <Accordion
                        title="How long will it take to repair my vehicle?"
                        content="
                        <div>
                            <div>
                                <p>
                                    An industry benchmark is one week (e.i. five working days) for each $1,000.00 of collision damage. 
                                    Therefore, a $6,000.00 collision repair estimate should take six weeks.
                                    However, there are variables that can delay or shorten the time to complete the repair:
                                </p>
                            </div>
                            <div>
                                <ol>
                                    <li>Parts availability.</li>
                                    <li>Re-inspections for hidden damage.</li>
                                    <li>Waiting for insurance company to approve additional claims.</li>
                                    <li>Make and model of vehicle.</li>
                                    <li>OEM vs. after-market replacement parts. Note: An OEM fender will take 2 hours to install compared to a after-market replacement part which takes 3 hours or longer to fit and install.</li>
                                    <li>Used parts take longer to source because they often must be removed from a salvage vehicle before parts can be delivered.</li>
                                </ol>
                            </div>
                        </div>"
                    />
                    <Accordion
                        title="What is an aftermarket replacement part?"
                        content='
                        <div>
                            <div>
                                <h4>
                                    An Aftermarket part can be described in the following points:
                                </h4>
                            </div>
                            <div>
                                <ol>
                                    <li>Replacement part not manufactured or licensed by the original manufacturer of the vehicle.</li>
                                    <li>Companies that make aftermarket replacement parts do not have the original engineering specification for the design, material and safety.</li>
                                    <li>Aftermarket replacement parts lack or have substandard warranty policies.</li>
                                    <li>Aftermarket replacement parts have an inferior corrosion resistant primer instead of a true "E Coat".</li> 
                                </ol>
                            </div>
                        </div>'
                    />
                    <Accordion
                        title="	How do I make arrangements for a loaner car while my vehicle is in your shop?"
                        content="
                        <div>
                            <div>
                                <div>
                                    <p>
                                        Check your insurance policy first. Many policies include a rental provision. You can choose from one of several local car rental companies. 
                                        We can schedule the service for you and the rental company will meet you at our shop.
                                    </p>
                                    <p>
                                        If you don't have rental coverage, we have several emergency vehicles. If a vehicle is available, then you would be welcomed to use our vehicle. 
                                    </p>
                                </div>
                            </div>
                        </div>"
                    />
                    <Accordion
                        title="	When can I drop my car off for service?"
                        content="
                        <div>
                            <div>
                                <div>
                                    <p>
                                        4M Collision is open between 8:00 AM and 6:00 PM, Monday through Friday.
                                        You can also drop off your vehicle either before or after our normal service hours. We have an Emergency Drop Box for your vehicle's
                                    </p>
                                    <p>
                                        If you don't have rental coverage, we have several emergency vehicles. If a vehicle is available, then you would be welcomed to use our vehicle. 
                                    </p>
                                </div>
                            </div>
                        </div>"
                    />
                    <Accordion
                        title="When and to whom do I pay my insurance deductible to?"
                        content="
                        <div>
                            <div>
                                <div>
                                    <p>
                                        The insurance company will send 4M Collision a two party check for the damage claim.
                                        You pay your deductible to 4M Collision. Your deductible must be paid before 4M Collision will release your vehicle.
                                    </p>
                                </div>
                            </div>
                    </div>"
                    />
                    <Accordion
                        title="Do you accept my insurance coverage?"
                        content="
                        <div>
                            <div>
                                <div>
                                    <p>
                                        4M Collision accept all insurance claims.  Please bring us your damaged vehicle and let 4M Collision help you negotiate a settlement.
                                    </p>
                                </div>
                            </div>
                        </div>"
                    />
                    <Accordion
                        title="	Is my child's Safety Seat safe to use after an accident?"
                        content="
                        <div>
                            <div>
                                <div>
                                    <p>
                                        Not all insurance companies have the same policy.  Most insurance companies require the collision center to remove the 
                                        Child Safety Seat and show proof that the seat was destroyed.
                                    </p>
                                </div>
                            </div>
                        </div>"
                    />
                    <Accordion
                        title="Can you provide a perfect match for my paint repair?"
                        content="
                        <div>
                            <div>
                                <p>
                                    With computerized color matching, no one will be able to tell you were in an accident. 
                                    Using the BASF refinishing process, we can match your vehicle’s color perfectly. 
                                    For any other questions, please feel free to reach out to us at 248-572-4844!
                                </p>
                            </div>
                        </div>"
                    />
                    <Accordion
                        title="Will my car total out?"
                        content="
                        <div>
                            <div>
                            <p>
                                This depends on three factors: the cost of repairs, the value of your vehicle, 
                                and the policies of your insurance company. Different insurance companies lean towards 
                                totalling out vehicles, whereas others will invest more in repairing the vehicle.
                            </p>
                            <p>
                                The value used to make the decision to total or not is made by the insurance company, not by the body shop.

                            </p>
                            </div>
                        </div>"
                    />
                </div>
            </div>
            <div className="mx-auto w-full sm:w-11/12 text-white grid grid-cols-1 sm:grid-cols-2 order-last sm:order-first font-sans mb-16">
                <div className="col-span-1 sm:col-span-2">
                    <h3 className="text-yellow-300 w-11/12 mx-auto">Ten Things To Know Before Having Your Car Repaired.</h3>
                </div>
                <div className="bg-black w-full">
                    <div className="grid grid-cols-10 mx-auto w-11/12 ">
                        <h1 className="text-yellow-300 col-span-2">1</h1>
                        <p className="col-span-8 mt-5">
                            Your car is the second largest investment you're likely to make. 
                            Preserve its value and your safety by having it repaired professionally.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-10 mx-auto w-11/12 ">
                    <h1 className="text-yellow-300 col-span-2">2</h1>
                    <p className="col-span-8 mt-5">
                        Never drive a car that could be unsafe because of damages.
                    </p>
                </div>
                <div className="bg-black w-full">
                    <div className="grid grid-cols-10 mx-auto w-11/12 ">
                        <h1 className="text-yellow-300 col-span-2">3</h1>
                        <p className="col-span-8 mt-5">
                            Some insurance companies may want you to visit their drive-in claims center 
                            before having your car repaired. You can do this, or you can leave your car 
                            at our shop and ask that the insurance company inspect the car here.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-10 mx-auto w-11/12 ">
                    <h1 className="text-yellow-300 col-span-2">4</h1>
                    <p className="col-span-8 mt-5">
                        You are not required by law to obtain more than one estimate or appraisal.
                    </p>
                </div>
                <div className="bg-black w-full">
                    <div className="grid grid-cols-10 mx-auto w-11/12 ">
                        <h1 className="text-yellow-300 col-span-2">5</h1>
                        <p className="col-span-8 mt-5">
                            You have the right to go to the repair shop of your choice. 
                            Your insurance company cannot require you to go to a particular shop.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-10 mx-auto w-11/12 ">
                    <h1 className="text-yellow-300 col-span-2">6</h1>
                    <p className="col-span-8 mt-5">
                        Differences in repair estimates are common. 
                        A lower estimate may not include all necessary work. 
                        If you're not sure why one estimate is different from another you've received, 
                        please ask us.
                    </p>
                </div>
                <div className="bg-black w-full">
                    <div className="grid grid-cols-10 mx-auto w-11/12 ">
                        <h1 className="text-yellow-300 col-span-2">7</h1>
                        <p className="col-span-8 mt-5">
                            Choose a shop that has unibody repair equipment and certified (by I-CAR or ASE, for example) technicians.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-10 mx-auto w-11/12 ">
                    <h1 className="text-yellow-300 col-span-2">8</h1>
                    <p className="col-span-8 mt-5">
                        Ask if the shop will be using genuine manufacturer (OEM) replacement parts.
                    </p>
                </div>
                <div className="bg-black w-full">
                    <div className="grid grid-cols-10 mx-auto w-11/12 ">
                        <h1 className="text-yellow-300 col-span-2">9</h1>
                        <p className="col-span-8 mt-5">
                            Ask if the shop offers a repair warranty.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-10 mx-auto w-11/12 ">
                    <h1 className="text-yellow-300 col-span-2">10</h1>
                    <p className="col-span-8 mt-5">
                        4M Collision can help you negotiate your claim with the insurance company.
                    </p>
                </div>
            </div>
        </div> 
    </div>
    
  </Layout>
)

export default FaqPage