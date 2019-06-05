import React from 'react'
import Layout from '../components/shared/layout'
import PageHero from '../components/pageHero'

const VideoPage = props => {
    return (
        <Layout>
            <PageHero />
            <div className="container">
                 <h3>Videos Page</h3>
            </div>
        </Layout>
    )
}

export default VideoPage