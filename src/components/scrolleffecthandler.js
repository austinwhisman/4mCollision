import React, { useRef, useEffect, useState } from "react"

export const useElementOnScreen = (options) => {
    const containerRef = useRef(null)
    const [ isVisible, setIsVisible ] = useState(false)
    const [hasBeenSet, setHasBeenSet ] = useState(false);
    
    const callbackFunction = (entries) => {
      const [ entry ] = entries
      setIsVisible(entry.isIntersecting)
      //if(isVisible == true) setHasBeenSet(true)
    }
  
    useEffect(() => {
      
      const observer = new IntersectionObserver(callbackFunction, options)
      if (containerRef.current) observer.observe(containerRef.current)
      
      return () => {
        if(containerRef.current) observer.unobserve(containerRef.current)
        //setHasBeenSet(false)
      }
    }, [containerRef, options])
  
    
    
    return [containerRef, isVisible]
  }

  