import React, { useState, useEffect } from "react";
import Testimonials from "./testimonials";

const TestimonialContainer = (props) => {

    var slides = document.getElementsByClassName("slides");
    const [setActiveSlide, setActiveSlideState] = useState(0);
    const[setLastAction, seLastActionState] = useState('increment');

    function autoProgressSlides() 
    {
        hideAllSlides();

        /* If true, we are on the last index of the array. set active slide back to zero.*/
        if (setActiveSlide >= slides.length - 1) 
        {
            setActiveSlideState(0);
            
            slides[setActiveSlide].style.removeProperty('display');
            slides[setActiveSlide].style.display = "none";

            slides[0].style.removeProperty('display');
            slides[0].style.display = "block";
        } 
        else // Else we will set the ac
        { 
            setActiveSlideState(setActiveSlide + 1);

            slides[setActiveSlide].style.removeProperty('display');
            slides[setActiveSlide].style.display = "none";

            slides[(setActiveSlide + 1)].style.removeProperty('display');
            slides[(setActiveSlide + 1)].style.display = "block"; 
        }
    }
    
    function hideAllSlides()
    {
        for (var i = 0; i < slides.length; i++)
        {
            slides[i].style.removeProperty('display');
            slides[i].style.display = "none";
        }
    }

    function incrementSlider() 
    {
        hideAllSlides();
        seLastActionState('increment');

        if(setLastAction == 'increment')
        {
            
            slides[setActiveSlide].style.removeProperty('display');
            slides[setActiveSlide].style.display = "block";

            if (setActiveSlide >= slides.length - 1) 
            {
                setActiveSlideState(0);
                return;
            }

            setActiveSlideState(setActiveSlide + 1);
        } else {
            
            slides[setActiveSlide + 1].style.removeProperty('display');
            slides[setActiveSlide + 1].style.display = "block";
            if (setActiveSlide >= slides.length - 2) 
            {
                setActiveSlideState(0);
                return;
            }
            
            setActiveSlideState(setActiveSlide + 2);
        }
        
        console.log("increment end: " + setActiveSlide);
    }

    function decrementSlider() 
    {
        hideAllSlides();
        seLastActionState('decrement');

        if(setLastAction == 'decrement')
        {
            if((setActiveSlide - 1) == -1)
            {
                slides[slides.length -1].style.removeProperty('display');
                slides[slides.length - 1].style.display = "block";

                setActiveSlideState(slides.length - 1); 
                return;
            }

            slides[setActiveSlide - 1].style.removeProperty('display');
            slides[setActiveSlide - 1].style.display = "block";

            setActiveSlideState(setActiveSlide - 1);
            console.log("decrement end: " + setActiveSlide);
        } else {
            if((setActiveSlide - 2) == -1)
            {
                slides[slides.length - 1].style.removeProperty('display');
                slides[slides.length - 1].style.display = "block";

                setActiveSlideState(slides.length - 1); 
                return;
            }

            slides[setActiveSlide - 2].style.removeProperty('display');
            slides[setActiveSlide - 2].style.display = "block";

            setActiveSlideState(setActiveSlide - 2);
            console.log("decrement end: " + setActiveSlide);
        }
    }

    useEffect(() => {
        var interval = setInterval(() => {
            autoProgressSlides()
        }, 10000);
      
        return () => clearInterval(interval);
      }, [setActiveSlide]);
    
    return (
        <div className="w-full">
            <div>
                <Testimonials
                    styleName="display"
                    name="1 Dan'L Corneail"
                    review="My car was involved in a crunch, went in to get an estimate, great running office with a beautiful receptionist. 
                    They quoted me three different times at my request. They helped me to get a car rental. 
                    And they did a fantastic job on my tailgate!"
                />
                <Testimonials
                    styleName="hidden"
                    name="2 Shannon Baxter"
                    review="4M went above and beyond my expectations. I had some minor cosmetic damage on the front of my SUV and had to work with my insurance. 
                    I was very impatient to get my car back, calling daily to ask when it would be completed.  They worked with me politely and efficiently 
                    and also took car of all the insurance claims in order to get my car back within a timely manner, washed and interior detailed as well. 
                    Beyond impressed and they have received a client for life. Thank you"
                />
                <Testimonials
                    styleName="hidden"
                    name="3 Dalton O"
                    review="Quick and reasonable. Brought in my car to fix a dent that had the paint scraped off, 
                    they had it done in 1 day. Everything looked great when they were done, would highly recommend."
                />
                <Testimonials
                    styleName="hidden"
                    name="4 James Wynn"
                    review="I have a 2020 KIA Sportage that had a right rear panel damage. The work  was top notch and done in less than a week.
                    Received the car with the exterior and interior cleaned and polished. I definitely will recommend this repair shop to all I know"
                />
                <div>
                    <button className="bg-red-800 text-white" onClick={incrementSlider}> incrementSlider</button>
                </div>
                <div>
                    <button className="bg-red-800 text-white" onClick={decrementSlider}> decrementSlider</button>
                </div>
            </div>
        </div>
        );
        
}

export default TestimonialContainer
