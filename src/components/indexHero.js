import React from 'react'
import Hero from './hero'

const IndexHero = () => {
    return (<Hero>
                <div className="index-hero">
                    {/* <div className="index-hero__market-title"><a href="#">Join</a> 500+ beginner programmers</div> */}
                    <h1 className="index-hero__title">LEARN TO <span className="color">CODE</span> FOR FREE</h1>
                    {/* <ul>
                        <li><h2><span className="bracket-bulletin">{"{}"}</span><a href="#">Python</a></h2></li>
                        <li><h2><span className="bracket-bulletin">{"{}"}</span><a href="#">JavaScript</a></h2></li>
                        <li><h2><span className="bracket-bulletin">{"{}"}</span><a href="#">Algorithms</a></h2></li>
                    </ul> */}
                </div>
            </Hero>)
}

export default IndexHero