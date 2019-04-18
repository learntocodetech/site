import React from 'react'

const SectionDivider = props => {
    return (<div className="section-divider">
                <h3><span className="half">&lt;</span>{props.children}<span className="half">&gt;</span></h3>
            </div>)
}

export default SectionDivider
