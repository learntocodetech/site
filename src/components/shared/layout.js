/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Hero from '../indexHero';
import Banner from '../banner'
import Footer from './footer'
import "../../styles/index.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="page-container">
          <Header siteTitle={data.site.siteMetadata.title} />
          <Banner label="Code with the best." />
            <main>{children}</main>
          <Footer />
      </div>
        
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
