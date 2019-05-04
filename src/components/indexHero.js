import React from 'react'
import Hero from './hero'
import JSIcon from '../images/javascript.svg'

const IndexHero = () => {
    return (<Hero>
                <div className="index-hero">
                    <h1 className="index-hero__title">
                        <span className="color">Conquer</span> Algorithms<br/>
                        Learn to <span className="color">Code</span>
                    </h1>
                    {/* <img src={JSIcon} /> */}
                </div>
            </Hero>)
}

export default IndexHero

