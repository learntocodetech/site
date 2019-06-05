import React from 'react'
import Layout from '../components/shared/layout'
import PageHero from '../components/pageHero'

const SlidePage = props => {
    return (
        <Layout>
            <PageHero />
            <div className="container">
                 <h3>Slides Page</h3>
            </div>
        </Layout>
    )
}

export default SlidePage