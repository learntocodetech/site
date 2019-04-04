import React from 'react'
import FacebookWidget from './facebookWidget'
import SectionDivider from './sectionDivider';


const ContactSection = () => {
    return (<div>
                <SectionDivider label="contact" />
                <FacebookWidget />
            </div>)
}

export default ContactSection