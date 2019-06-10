import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/profile_pic.js"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ba4c00`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0rem`,
      }}
    >
    <div style={{ maxWidth: `250px`, margin: `auto`}}>
      <Image />
    </div>
      <h1 style={{ margin: 0 }}>
        Stefan Shepko-Hamilton
      </h1>
      <h5>
      Computer Science at State University of New York at New Paltz.
      </h5>
      <h5>
      stefanshepko@gmail.com
      </h5>
      <h5>
        <i href="https://github.com/Stefunga" style={{margin:`auto`}} class="fa fa-github fa-2x"></i>
        <i href="https://www.linkedin.com/in/stefan-shepko-hamilton/" style={{margin:`auto`}} class="fa fa-linkedin fa-2x"></i>
      </h5>
    </div>
    <div>
    <a href="#About" style={{ margin:30}}>  About  </a>
    <a href="#Education" style={{ margin:30}}>  Education  </a>
    <a href="#Projects" style={{ margin:30}}>  Projects  </a>
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
