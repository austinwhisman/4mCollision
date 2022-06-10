import React, { useRef, useEffect, useState } from "react"

export const useLazyLoadImage = (options) => {

    const isBrowser = typeof window !== "undefined"
    if(isBrowser) var images = document.querySelectorAll('.lazyload');
    

    const callbackFunction = (entries) => {
        
       entries.map((entry) => {
            if (entry.isIntersecting) {
                //entry.target.src = entry.target.dataset.src;
                entry.target.classList.add('opacity-100');
                //entry.tartget.classList.remove('opacity-0');
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(callbackFunction, options)
    useEffect(() => {
        if(isBrowser) images.forEach(image => observer.observe(image))
    })
}

  