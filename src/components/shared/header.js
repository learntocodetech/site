import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => 
  (<header>
      <span className="logo">
        LEARN TO CODE.<span className="tech">TECH</span>
      </span>
      <nav>
        <a href="#">Videos</a>
        <a href="#">Blog</a>
        <a href="#">Paths</a>
        <a href="#">Code</a>
        <a href="#">Contact</a>
      </nav>
  </header>)


export default Header
