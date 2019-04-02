import React from "react"
import { Link } from "gatsby"

import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

export default IndexPage
