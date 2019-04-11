import React from 'react'
import SectionDivider from './sectionDivider'

const VideoSection = () => {
    return (<section className="video-section feature-section">
                <SectionDivider label="Videos" />
                <div className="video-section__content">
                    <div className="video-grid">
                        <div className="video-item">
                            <img src="https://img.youtube.com/vi/Yh7yOxy1ngw/hqdefault.jpg" />
                        </div>
                         
                        <div className="video-item">
                            <img src="https://img.youtube.com/vi/sEU12c-vG5U/hqdefault.jpg" />
                        </div>
                        
                        <div className="video-item">
                            <img src="https://img.youtube.com/vi/BK9d4gbLVnY/hqdefault.jpg" />
                        </div>
                        
                        <div className="video-item">
                            <img src="https://img.youtube.com/vi/u9tmrQaTSC0/hqdefault.jpg" />
                        </div>
                    </div>

                    <div className="video-section__copy">
                        <h3 className="copy__title">100+ Videos</h3>
                        <p className="copy__description">Watch high quality programming videos on:</p>
                        <ul className="copy__feature-list">
                            <li>
                                <span className="bracket-bulletin">{"{}"}</span>
                                <a href="#">React + Redux</a>
                            </li>
                            <li>
                                <span className="bracket-bulletin">{"{}"}</span>
                                <a href="#">Python + Django</a>
                            </li>
                            {/* <li>
                                <span className="bracket-bulletin">{"{}"}</span>
                                <a href="#">SQL + Databases</a>
                            </li> */}
                            <li>
                                <span className="bracket-bulletin">{"{}"}</span>
                                <a href="#">Data Structures + Algorithms</a>
                            </li>
                            <li>
                                <span className="bracket-bulletin">{"{}"}</span>
                                <a href="#">Coding Challenges + Real Apps</a>
                            </li>
                            
                        </ul>
                        <div className="video-section__btn feature-section__btn">
                            <input type="button" value="Watch" />
                        </div>
                    </div>
                </div>
                
            </section>)
}

export default VideoSection