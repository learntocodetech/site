import React from 'react'

const Hero = () => {
    return (<div class="hero">
                <div class="hero-content">
                    <div class="video-item">
                        <iframe width="550" height="320" src="https://www.youtube.com/embed/Yh7yOxy1ngw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="hero-text">
                        <h1 class="hero-text__title">The Daily Method</h1>
                        <div class="hero-text__description">JavaScript Filter method.</div>
                    </div>
                </div>
            </div>)
}


export default Hero