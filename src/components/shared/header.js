import { Link } from "gatsby"
import React from "react"
import Logo from '../../images/logo.svg'
import VideoIcon from '../../images/pre-video-camera.svg'
import GuidesIcon from '../../images/pre-text.svg'
import SlidesIcon from '../../images/pre-sliders.svg'
import ChatbotIcon from '../../images/pre-ai.svg'
import BlogIcon from '../../images/pre-rocket.svg'
// import AppIcon from '../../images/mobile.svg'

const Header = ({ siteTitle }) => 
  (<header>
    <div className="header-container">
        <Link to="/" className="logo"><img src={Logo} /></Link>
        <nav className="main-nav">
          <ul className="main-nav__sections">
            <li>
              <Link to="/videos">
                <img src={VideoIcon} />
                Videos
              </Link>
            </li>

            <li>
              <Link to="/guides">
                <img src={GuidesIcon} />
                Guides
              </Link>
            </li>

            <li>
              <Link to="/slides">
                <img src={SlidesIcon} />
                Slides
              </Link>
            </li>

            <li>
              <Link to="/chatbots">
                <img src={ChatbotIcon} />
                Chatbots
              </Link>
            </li>
            <li>
              <Link to="/blog">
              <img src={BlogIcon} />
                Blog
              </Link>
            </li>
          </ul>
        </nav>
    </div>
      
  </header>)


export default Header
