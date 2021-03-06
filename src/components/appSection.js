import React from 'react'
import SectionDivider from './sectionDivider'

const AppSection = () => {
    return (<section className="app-section feature-section">
                <SectionDivider label="Apps" />
                <div className="app-section__content">
                    <div className="app-grid">
                      
                        <div className="app-item">
                            <img src="http://tensor-programming.com/wp-content/uploads/2016/09/javascript-300x150.jpg" />
                        </div>
                    </div>
                    <div className="app-section__content__copy">
                        <h3 className="copy__title">5+ Real World Apps</h3>
                    </div>
                </div>
            </section>)
}

export default AppSection