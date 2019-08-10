import React from 'react'
import Logo from '../../images/logo.svg'
import SectionDivider from '../sectionDivider'
import YouTubeIcon from '../../images/youtube.svg'
import FacebookIcon from '../../images/facebook.svg'
import TwitterIcon from '../../images/twitter.svg'
import LinkedInIcon from '../../images/linkedin.svg'
import InstagramIcon from '../../images/instagram.svg'

const LinkedInURL = 'https://linkedin.com/company/learntocode'
const FacebookURL = 'https://facebook.com/learntocodetech'
const InstagramURL = 'https://www.instagram.com/learntocode.tech/'
const TwitterURL = 'https://twitter.com/learntocodetech'
const YouTubeURL = 'https://youtube.com/learntocodetech'

const Footer = () => {
    return (<footer className="footer">
                <div className="footer-divider">
                    <div>
                        <span className="footer__logo"><img src={Logo} /></span>
                        <ul className="social-icons">
                            <li><a href={LinkedInURL} target="_blank"><img src={LinkedInIcon} /></a></li>
                            <li><a href={FacebookURL} target="_blank"><img src={FacebookIcon} /></a></li>
                            <li><a href={InstagramURL} target="_blank"><img src={InstagramIcon} /></a></li>
                            <li><a href={TwitterURL} target="_blank"><img src={TwitterIcon} /></a></li>
                            <li><a href={YouTubeURL} target="_blank"><img src={YouTubeIcon} /></a></li>
                        </ul>
                    </div>
                </div>
                <SectionDivider>
                   Made with <img className="footer__heart-icon" src="https://cdn4.iconfinder.com/data/icons/artificial-intelligence-fill-outline/64/64_heart-gear-metal-robot-ai-512.png" />in NYC
                </SectionDivider>
            </footer>)
}

export default Footer