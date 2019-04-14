import React from 'react'
import SectionDivider from './sectionDivider'

const GuideSection = () => {
    return (<section className="guide-section feature-section">
                <SectionDivider label="Guides" />
                <div className="guide-section__content">
                    <div className="guide-grid">
                        <div className="guide-item">
                            <img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png" />
                        </div>
                    
                        <div className="guide-item">
                            <img src="http://austinjavascript.com/wp-content/uploads/2012/11/thanksgiving.js-400x400.png" />
                        </div>
                        <div className="guide-item">
                            <img src="https://storage.googleapis.com/deepmind-live-cms/images/DM_Blog_Post_Image_20170314_2%2520%25282%2529_.2e16d0ba.fill-400x400_jBKTiCp.png" />
                        </div>
                        <div className="guide-item">
                            <img src="https://corevalue.net/wp-content/uploads/2016/04/9d19310763171b0d958d23a18b3d7e1c_400x400.png" />
                        </div>
                    </div>

                    <div className="guide-section__content__copy section__copy">
                        <h3 className="copy__title">100+ Guides and Tutorials</h3>
                        <p className="copy__description">Read concise and up to date programming tutorials.</p>
                        <ul className="copy__feature-list">
                            <li>
                                <span className="bracket-bulletin">{"{}"}</span>
                                <a href="#">The Internet Guide</a>
                            </li>

                            <li>
                                <span className="bracket-bulletin">{"{}"}</span>
                                <a href="#">The Python Guide</a>
                            </li>
                            <li>
                                <span className="bracket-bulletin">{"{}"}</span>
                                <a href="#">The JavaScript Guide</a>
                            </li>
                        
                            <li>
                                <span className="bracket-bulletin">{"{}"}</span>
                                <a href="#">API Design: From Rest to GraphQL</a>
                            </li>

                            <li>
                                <span className="bracket-bulletin">{"{}"}</span>
                                <a href="#">Databases: Relational + GraphQL</a>
                            </li>

                            
                            
                            
                            
                        </ul>
                        <p className="">
                            
                        </p>
                        <div className="guide-section__btn feature-section__btn">
                            <input type="button" value="Read" />
                        </div>
                    </div>
                </div>

                
                
            </section>)
}

export default GuideSection