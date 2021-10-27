import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import headerImage from "../images/4mcollisionheader.png"
import logoSvg from '../images/4mlogo.svg'

const LoadingScreen = () => (
  <div>
    <p className="text-white absolute top-1/2 left-1/2 trasnform -translate-y-1/2 -translate-x-1/2">Loading</p>
  </div>
)



export default LoadingScreen