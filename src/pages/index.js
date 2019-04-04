import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/shared/layout"
import Hero from "../components/hero"
import CodeSection from "../components/codeSection"
import BlogSection from "../components/blogSection"
import VideoSection from "../components/videoSection"
import ContactSection from "../components/contactSection"
import FacebookWidget from '../components/facebookWidget'
import SEO from "../components/shared/seo"

class IndexPage extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=241987553372668&autoLogAppEvents=1";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (<Layout>
      <SEO title="Learn to Code Tech" keywords={[`gatsby`, `application`, `react`]} />
      <Hero />
      <CodeSection />
      <BlogSection />
      <VideoSection />
      <FacebookWidget />
    </Layout>)
  }
}

export default IndexPage
