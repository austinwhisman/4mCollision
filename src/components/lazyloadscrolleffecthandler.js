import React, { useRef, useEffect, useState } from "react"

export const useLazyLoadImage = (options) => {

    const isBrowser = typeof window !== "undefined"
    if(isBrowser) var images = document.querySelectorAll('.lazyload');
    
    const callbackFunction = (entries) => {
        
       entries.map((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('opacity-100');
        });
    }

    useEffect(() => {

        const observer = new IntersectionObserver(callbackFunction, options)

        if(isBrowser) { 
            images.forEach(image => {
                observer.observe(image)
            })
        }
    
        return () => {
            images.forEach(image => {
                observer.unobserve(image)
            })
        }

    })
}

  