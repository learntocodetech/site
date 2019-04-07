import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => 
  (<header>
    <div className="header-container">
        <span className="logo">
          LEARN TO CODE.<span className="tech">TECH</span>
        </span>
        <nav>
          {/* <a href="#">Videos</a>
          <a href="#">Guides</a>
          <a href="#">Paths</a>
          <a href="#">Apps</a> */} 
          <a href="#">Sign Up</a>
        </nav>
    </div>
      
  </header>)


export default Header
