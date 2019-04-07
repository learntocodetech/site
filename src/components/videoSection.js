import React from 'react'
import SectionDivider from './sectionDivider'

const VideoSection = () => {
    return (<section className="video-section">
                <SectionDivider label="Videos" />
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
            </section>)
}

export default VideoSection