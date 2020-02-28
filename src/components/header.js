import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/profile_pic.js"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: 'relative',
      marginBottom: `1.45rem`,
    }}
  >
    <div style={{position: 'absolute'}}>
      <div style={{ maxWidth: `250px`, margin: `auto`}}>
        <Image />
      </div>
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0rem`,
      }}
    >
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
        <a href="https://github.com/Stefunga" style={{margin:`auto`}} class="fa fa-github fa-2x"></a>
        <a href="https://www.linkedin.com/in/stefan-shepko-hamilton/" style={{margin:`auto`}} class="fa fa-linkedin fa-2x"></a>
      </h5>
    </div>
    <div>
    <a href="#About" style={{ margin:30}}>  About  </a>
    <a href="#Education" style={{ margin:30}}>  Education  </a>
    <a href="#Projects" style={{ margin:30}}>  Projects  </a>
    <a href="#Experience" style={{ margin:30}}>  Experience  </a>
    </div>
    <div style={{paddingBottom:100}}></div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
