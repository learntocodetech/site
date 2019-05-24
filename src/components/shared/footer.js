import React from 'react'
import Logo from '../../images/logo.svg'
import SectionDivider from '../sectionDivider'
import LinkedInIcon from '../../images/linkedin.svg'
import FacebookIcon from '../../images/facebook.svg'

const Footer = () => {
    return (<footer className="footer">
                <div className="footer-divider">
                    <div>
                        <span className="footer__logo">
                            <img src={Logo} />
                        </span>
                        {/* <ul className="social-icon-list">
                            <li><img src={LinkedInIcon} /></li>
                            <li><img src={FacebookIcon} /></li>
                        </ul> */}
                    </div>
                    {/* <SectionDivider>
                        Made with <img className="footer__heart-icon" src="https://cdn4.iconfinder.com/data/icons/artificial-intelligence-fill-outline/64/64_heart-gear-metal-robot-ai-512.png" />in NYC
                    </SectionDivider> */}
                </div>
             
            </footer>)
}

export default Footer