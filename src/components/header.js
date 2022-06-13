import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logoSvg from '../images/4mlogo.svg'

const Header = ({ siteTitle }) => (
  <header
  className="w-auto overflow-hidden bg-red-700"
    style={{
      marginBottom: `1.45rem`,
      position: 'relative',
      clipPath: `polygon(
        0 0,
        100% 0,
        100% 100%,
        0 calc(100% - 5vw)
      )`,
      maxHeight: '1100px',
      height: '111vh'
    }}
  >
    <div className="h-full w-full bg-red-700">
    <div alt="4m collision location" className=" bg-4m-collision sm:bg-fixed bg-cover bg-no-repeat opacity-20 h-full w-full "></div>
      </div>
    <div className="text-center"
      style={{
        margin: `0 auto`,
        zIdex:1,
        backgroundImage: `linear-gradient(106.9deg, rgb(0, 0, 0) 60.9%, rgb(23 23 23 / 47%) 122.3%)`,
        opacity: .55,
        width: '100%',
        height: '100%',
        position: 'absolute', 
        top: '0px',
        left: '50%',
        transform: 'translate(-50%, 0)'
      }}
    />
    <div className="absolute transform -translate-y-2/4 -translate-x-2/4 top-1/2 left-1/2 z-10 w-11/12">
      <div className="relative w-full grid grid-cols-1">
        <div
          className="bg-contain w-56 h-20 sm:w-96 sm:h-32 z-10 bg-no-repeat"
          style={{ 
            backgroundImage: `url(${logoSvg})`,
            margin: 'auto'
            
          }}
          />
        <h1  className="w-full text-center"
        style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `#ffe26d`,
              textDecoration: `none`
            }}
            >
          COLLISION CENTER
          </Link>
        </h1>
        <button className=" bg-yellow-300 before:bg-gray-800 w-full max-w-xs hvr-sweep-to-right font-bold mx-auto px-4 font-sans rounded text-red-700 hover:text-yellow-300 py-6 mt-6">
            <a href="tel:2485724844">
                Click To Call: 248-572-4844
            </a>
        </button>
      </div>
      <div className="text-2xl text-center text-white font-sans">
        <p className="my-7">1663 N. Lapeer Rd. Oxford, MI</p>
        <p><span>Hours: </span> Mon-Friday 8AM-5PM</p>
      </div> 
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header