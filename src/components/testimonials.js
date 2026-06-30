import React, { useState, useRef } from "react";

function Testimonials(props) {
    const [setActive, setActiveState] = useState("");
  
    /*
    function toggleAccordion() {
      setActiveState(setActive === "" ? "active" : "");
      setHeightState(
        setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
      );
    }
    */
    return (
        <div className={`slides ${ props.styleName  == 'display' ? "": "hidden"}`}>
            
            <div className="accordion__text bg-white text-gray-800">
                <div className="">
                    <p>{props.name}</p>  
                </div>
                <div>
                    <p>{props.review}</p>    
                </div>
            </div>
        </div>
    );
  }

export default Testimonials