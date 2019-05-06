import { Link } from "gatsby"
import React from "react"
import Logo from '../../images/logo.svg'
import VideoIcon from '../../images/video-camera.svg'
import GuidesIcon from '../../images/text.svg'
import SlidesIcon from '../../images/slider.svg'
import ChatbotIcon from '../../images/ai.svg'
import BlogIcon from '../../images/rocket.svg'

// import AppIcon from '../../images/mobile.svg'

const Header = ({ siteTitle }) => 
  (<header>
    <div className="header-container">
        <span className="logo"><img src={Logo} /></span>
        <nav className="main-nav">
          <ul className="main-nav__sections">
            <li>
              <a href="#">
                <img src={VideoIcon} />
                Videos
              </a>
            </li>

            <li>
              <a href="#">
                <img src={GuidesIcon} />
                Guides
              </a>
            </li>

            <li>
              <a href="#">
                <img src={SlidesIcon} />
                Slides
              </a>
            </li>

            <li>
              <a href="#">
                <img src={ChatbotIcon} />
                Chatbots
              </a>
            </li>
            <li>
              <a href="#">
              <img src={BlogIcon} />
                Blog
              </a>
            </li>

            {/* <li>
              <a href="#">
                <img src={PartnerIcon} />
                 Hire Us
              </a>
            </li> */}
          </ul>
        </nav>
    </div>
      
  </header>)


export default Header
