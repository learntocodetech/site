import React from 'react'
import SectionDivider from '../sectionDivider'
import LinkedInIcon from '../../images/linkedin.svg'
import InstagramIcon from '../../images/instagram.svg'

const Footer = () => {
    return (<footer className="footer section-divider">
                <SectionDivider>
                    Made with <img className="footer__heart-icon" src="https://cdn4.iconfinder.com/data/icons/artificial-intelligence-fill-outline/64/64_heart-gear-metal-robot-ai-512.png" />in NYC
                </SectionDivider>
                <ul className="social-media-icons">
                    <li><img src={InstagramIcon} /></li>
                    <li><img src={LinkedInIcon} /></li>
                </ul>
            </footer>)
}

export default Footer