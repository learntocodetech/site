import React from 'react'
import Hero from './hero'
import JSIcon from '../images/javascript.svg'

const IndexHero = () => {
    return (<Hero>
                <div className="index-hero">
                    <h1 className="index-hero__title">
                        <span className="color">Conquer</span> Algorithms &<br/>
                        Make Amazing <span className="color">Chatbots</span>
                    </h1>
                </div>
            </Hero>)
}

export default IndexHero

