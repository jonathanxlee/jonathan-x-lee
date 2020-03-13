import PropTypes from "prop-types"
import React from "react"
import aboutStyles from "../styles/block.module.css"
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: left;
  z-index: 100;
`
const StyledLargeHeader = styled.h2`
  font-size: 7vw;
  margin-bottom: 0.2rem;
  @media(max-width:900px){
    font-size: 15vw
  }
`

const StyledMediumHeader = styled.h3`
  font-size: 4vw;
  margin-bottom: 2rem;
  @media(max-width:900px){
    font-size: 6vw
  }
`

const StyledBody = styled.p`
  font-size: 2vw;
  @media(max-width:900px){
    font-size: 5vw
  }
`

const About = ({ data }) => (
  <StyledDiv>
    <Fade big cascade>
      <StyledLargeHeader>{data.title}</StyledLargeHeader>
      <StyledMediumHeader>{data.subtitle}</StyledMediumHeader>
      <StyledBody>{data.body}</StyledBody> 
    </Fade>
  </StyledDiv>
)

About.propTypes = {
  data: PropTypes.object,
}

About.defaultProps = {
  data: `{}`,
}

export default About