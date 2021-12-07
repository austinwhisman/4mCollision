import * as React from "react"
import { Link } from "gatsby"
import goldClass from "../images/goldclass.png"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactLayout from "../components/conactlayout"

const ContactPage = () => (
<ContactLayout>
    <Seo title="4mCollision Contact Page" />
    <div className="h-screen relative">
        <div  className="grid grid-cols-2 relative top-1/2 transform -translate-y-1/2">
            <div className="col-span-2 row-start-2 lg:col-span-1 lg:row-start-1">
                <form className="relative w-4/5 max-w-2xl mx-auto xl:ml-8 mb-0 font-sans">
                    <h3 className="text-yellow-300 ml-4">CONTACT</h3>
                    <span className="w-full border-t-4 border-white block"></span>
                    <div className="flex flex-wrap pt-8 -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-black focus:text-white text-gray-100 border rounded border-gray-900 focus:border-gray-500 py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-800" id="grid-first-name" type="text" placeholder="Jane"/>
                        
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-black focus:text-white text-gray-100  border border-gray-900 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" for="grid-city">
                                Make
                            </label>
                            <input className="appearance-none block w-full bg-black focus:text-white text-gray-100 border border-gray-900 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="grid-city" type="text" placeholder="Ford"/>
                        </div>
                        <div className="w-1/3 px-3 mb-2">
                            <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" for="grid-zip">
                                Model
                            </label>
                            <input className="appearance-none block w-full  bg-black focus:text-white text-gray-100 border border-gray-900 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="grid-zip" type="text" placeholder="F-150"/>
                        </div>
                        <div className="w-1/3 px-3 mb-2">
                            <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" for="grid-zip">
                                Year
                            </label>
                            <input className="appearance-none block w-full bg-black focus:text-white text-gray-100 border border-gray-900 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="grid-zip" type="text" placeholder="2021"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" for="grid-city">
                                City
                            </label>
                            <input className="appearance-none block w-full bg-black focus:text-white text-gray-100 border border-gray-900 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="grid-city" type="text" placeholder="Oxford"/>
                        </div>
                        <div className="w-1/2 px-3 mb-8">
                            <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" for="grid-zip">
                                Zip
                            </label>
                            <input className="appearance-none block w-full bg-black focus:text-white text-gray-100 border border-gray-900 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3 mb-6 md:mb-6">
                            <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" for="grid-city">
                                Tell Us More
                            </label>
                            <textarea class="w-full px-3 py-0 bg-black focus:text-white text-gray-100 border-gray-900 rounded-lg focus:outline-none focus:bg-gray-800 focus:border-gray-500" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="relative">
                        <button className="hvr-sweep-to-right mb-6 lg:mb-0 w-1/2 font-bold mx-auto px-4 font-sans rounded text-black hover:text-yellow-300 py-2">
                            <a href="tel:2485724844">
                                SEND
                            </a>
                        </button> 
                    </div>
                </form>
            </div>
            <div className="col-span-2 lg:col-span-1 row-start-1">
                <button style ={{transform: 'translate(-50%, -50%)'}}className="relative bg-yellow-300 before:bg-gray-800 hvr-sweep-to-right w-auto font-bold mx-auto px-4 font-sans rounded text-black hover:text-yellow-300 py-6 lg:top-1/2 left-1/2">
                    <a href="tel:2485724844">
                        Click To Call: 248-572-4844
                    </a>
                </button> 
            </div>  
        </div>
    </div>
</ContactLayout>
)

export default ContactPage
