import React from 'react'
import Layout from '../components/shared/layout'
import PageHero from '../components/pageHero'

const Blog = props => {
    return (
        <Layout>
            <PageHero />
            <div className="container">
                 <h3>Blog Page</h3>
            </div>
        </Layout>
    )
}

export default Blog