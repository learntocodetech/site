import React from 'react'
import Layout from '../components/shared/layout'
import PageHero from '../components/pageHero'

const GuidePage = props => {
    return (
        <Layout>
            <PageHero />
            <div className="container">
                 <h3>Guides Page</h3>
            </div>
        </Layout>
    )
}

export default GuidePage