import React from 'react'
import SectionDivider from './sectionDivider'

const VideoSection = () => {
    return (<section className="video-section">
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
                                <a href="#">Coding Challenges.</a>
                            </li>
                            <li>
                                <span className="bracket-bulletin">{"{}"}</span>
                                <a href="#">React and Redux</a>
                            </li>
                            <li>
                                <span className="bracket-bulletin">{"{}"}</span>
                                
                            </li>
                        </ul>
                    </div>
                </div>
                
            </section>)
}

export default VideoSection