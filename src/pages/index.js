import React from "react"
import { Link } from "gatsby"
import About from "../components/about"
import Education from "../components/education"
import Work from "../components/work"
import Skills from "../components/skills"
import aboutData from "../content/about/about"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

const workData = require("../content/work.json");

const FullScreenSection = styled.section`
  display: flex;
  height: calc(100vh + 53px);
  padding: 5vh 5vw 5vh 5vw;
  align-items: center;
`

const StyledSection = styled.section`
  padding: 5vh 5vw 25vh 5vw;
  
`

const CenteredSection = styled.section` 
  align-content: center; 
  padding: 25vh 15vw 50vh 15vw;
`

const IndexPage = () => (
  <div>
    <SEO title='Home'></SEO>
    <Layout>
      <FullScreenSection id='about'>
        <About data={aboutData} />
      </FullScreenSection>
      <StyledSection id='education'>
        <Education />
      </StyledSection>
      <CenteredSection id='experience'>
        <Work data={workData}/>
      </CenteredSection>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </div>
  
);

export default IndexPage
