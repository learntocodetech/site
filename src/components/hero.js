import React from 'react'
import SlideCard from '../images/ltc-js-reverse.png'
import SlideCard2 from '../images/ltc-js-flat2.png'

const Hero = props => {
    return (<div class="hero">
                <div class="hero-content">
                    {props.children}
                </div>
                <div className="newsletter">
                    <div className="slide-cards">
                        <img className="slide-card slideCard2" src={SlideCard2} />
                    </div>
                </div>
            </div>)
}


export default Hero