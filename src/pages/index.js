import React from "react"
import { Link } from "gatsby"

import Layout from "../components/shared/layout"
import Hero from "../components/hero"
import CodeSection from "../components/codeSection"
// import BlogSection from "../components/blogSection"
// import VideoSection from "../components/videoSection"
// import ContactSection from "../components/contactSection"
import SEO from "../components/shared/seo"

const IndexPage = () => {
  return (<Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />]
            <Hero />
            <CodeSection />
          </Layout>)
}

export default IndexPage
