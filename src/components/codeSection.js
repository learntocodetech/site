import React from 'react'
import SectionDivider from './sectionDivider'

const CodeSection = () => {
    return (<section class="code-section">
                <SectionDivider label="Apps" />

                <div class="code-grid">
                    <div class="code-item">
                        <img src="http://energyconferencenetwork.com/wp-content/uploads/2015/01/ECN-300x150.jpg" />
                    </div>
                    <div class="code-item">
                        <img src="http://score-international.com/wp-content/uploads/2016/11/Monster400x223-300x167-300x150.jpg" />
                    </div>
                    <div class="code-item">
                        <img src="http://tensor-programming.com/wp-content/uploads/2016/09/javascript-300x150.jpg" />
                    </div>
                    <div class="code-item">
                        <img src="http://tensor-programming.com/wp-content/uploads/2016/09/javascript-300x150.jpg" />
                    </div>
                </div>
            </section>)
}

export default CodeSection