import React from 'react'
import SectionDivider from './sectionDivider'

const CodeSection = () => {
    return (<section class="app-section">
                <SectionDivider label="Apps" />
                <div className="app-section__content">
                    <div className="app-grid">
                        <div className="app-item">
                            <img src="http://energyconferencenetwork.com/wp-content/uploads/2015/01/ECN-300x150.jpg" />
                        </div>
                        <div className="app-item">
                            <img src="http://score-international.com/wp-content/uploads/2016/11/Monster400x223-300x167-300x150.jpg" />
                        </div>
                        <div className="app-item">
                            <img src="http://tensor-programming.com/wp-content/uploads/2016/09/javascript-300x150.jpg" />
                        </div>
                        <div className="app-item">
                            <img src="http://tensor-programming.com/wp-content/uploads/2016/09/javascript-300x150.jpg" />
                        </div>
                    </div>
                    <div className="app-section__content__copy">
                        <h3 className="copy__title">Create real world Apps, no more ToDo Apps.</h3>
                    </div>
                </div>
            </section>)
}

export default CodeSection