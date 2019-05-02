import React from 'react'
import Hero from './hero'
import JSIcon from '../images/javascript.svg'

const IndexHero = () => {
    return (<Hero>
                <div className="index-hero">
                    <h1 className="index-hero__title">LEARN TO <span className="color">CODE</span> FOR FREE</h1>
                    {/* <img src={JSIcon} /> */}
                </div>
            </Hero>)
}

export default IndexHero

