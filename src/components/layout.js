/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "./navigation"
import Header from "./header"
import Footer from "./footer"
import Certificates from "./certificates"
import LoadingScreen from "./loadingscreen"
import "./layout.css"
import { useElementOnScreen } from './scrolleffecthandler'
import { useLazyLoadImage } from './lazyloadscrolleffecthandler'
import carPhoto from "../images/car-top-view2.jpg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const isBrowser = typeof window !== "undefined";
  if(isBrowser)
  {
    var path = window.location.pathname;
  }
  const [ containerRef, isVisible ] = useElementOnScreen({
      root: null,
      rootMargin: "200px",
      threshold: .1
  })

  useLazyLoadImage({
    root: null,
    rootMargin: "0px",
    threshold: .4
  });

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 100)
  }, [])
  return (
    
    <div className={ (path === '/') ? "sm:bg-fixed bg-contain bg-center sm:bg-right bg-black bg-no-repeat" : "bg-none"}
    
    >
    { loading === false ? 
      (
        <div className="bg-gray-900 bg-opacity-80">
          <Navigation navBackground= {isVisible ? true : false}/>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <div ref={containerRef} style={{margin: `0 auto`}}>
            <main >{children}</main>
            <Certificates/>
            <Footer/>
          </div>
        </div>
      ) : <LoadingScreen/>
      }
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

