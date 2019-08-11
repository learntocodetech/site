import React from 'react'
import SectionDivider from './sectionDivider'
import Reverse from '../images/ltc-js-reverse.png'
import Flat from '../images/ltc-js-flat2.png'
import Includes from '../images/ltc-js-includes.png'
import Pop from '../images/ltc-js-pop2.png'
import Push from '../images/ltc-js-push.png' 
import Sort from '../images/ltc-js-sort1.png'


const GuideSection = () => {
    return (<section className="guide-section feature-section">
                <SectionDivider>SLIDES</SectionDivider>
                <div className="lines"></div>
                <div className="section-content guide-section__content">
                    <div className="guide-grid">
                        <div className="guide-item"><img src={Flat} /></div>
                        <div className="guide-item"><img src={Reverse} /></div>
                        <div className="guide-item"><img src={Includes} /></div>
                        <div className="guide-item"><img src={Push} /></div>
                        <div className="guide-item"><img src={Pop} /></div>
                        <div className="guide-item"><img src={Sort} /></div>
                    </div>
                </div>
            </section>)
}

export default GuideSection