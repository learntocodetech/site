import React from 'react'

const SectionDivider = ({ label }) => {
    return (<div className="section-divider">
                <h3><span className="half">&lt;</span>{label}<span className="half">&gt;</span></h3>
            </div>)
}

export default SectionDivider
