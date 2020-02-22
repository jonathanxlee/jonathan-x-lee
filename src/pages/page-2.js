import React from "react"
import { Link } from "gatsby"
import About from "../components/about"
import Education from "../components/education"
import Work from "../components/work"
import aboutData from "../content/about/about"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

const workdata = require("../content/work.json");

const CenteredSection = styled.section` 
  align-content: center; 
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <section id='about'>
      <About data={aboutData} />
    </section>
    <section id='education'>
      <Education />
    </section>
    <CenteredSection id='experience'>
      <Work data={workdata}/>
    </CenteredSection>
    <section id='projects'>
      <About data={aboutData} />
    </section>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
