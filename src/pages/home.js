import React from "react"
import About from "../components/about"
import aboutData from "../content/about/about"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <section id='about' className='section-top'>
      <About data={aboutData} />
    </section>
    <section id='about2' className='section-top'>
      <About data={aboutData} />
    </section>
  </Layout>
)

export default Home
