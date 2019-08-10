import React from 'react'

const Hero = props => {
    return (<div className="hero">
                <div class="hero-content">
                    {props.children}
                </div>
            </div>)
}


export default Hero