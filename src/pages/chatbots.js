import React from 'react'
import Layout from '../components/shared/layout'
import PageHero from '../components/pageHero'

const ChatbotPage = props => {
    return (
        <Layout>
            <PageHero />
            <div className="container">
                 <h3>Chatbots Page</h3>
            </div>
        </Layout>
    )
}

export default ChatbotPage