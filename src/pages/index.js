import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/shared/layout"
import AppSection from "../components/appSection"
import GuideSection from "../components/guideSection"
import VideoSection from "../components/videoSection"
import IndexHero from "../components/indexHero"

import SEO from "../components/shared/seo"

class IndexPage extends Component {
  componentDidMount() {
    /* NTS: Find a better solution for using FB SDK */
    const script = document.createElement("script");

    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=241987553372668&autoLogAppEvents=1";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (<Layout>
              <SEO
                title="Learn to Code Tech"
                description="Learn to Code for free while developing real world applications using Python and JavaScript."
                keywords={[`learn to code`, `python`, `javascript`]} 
              />
              <VideoSection />
              <GuideSection />
            </Layout>)
  }
}

export default IndexPage
