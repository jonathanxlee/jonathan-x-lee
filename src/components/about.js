import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import aboutStyles from "../styles/block.module.css"
import Fade from 'react-reveal/Fade';

const About = ({ data }) => (
  
  <Fade big cascade>
    <div className={aboutStyles.block}>
      <h2 className="section-header font-basic_xl">{data.title}</h2>
      <h3 className="subtitle">{data.subtitle}</h3>
      <p>{data.body}</p> 
    </div>
  </Fade>
)

About.propTypes = {
  data: PropTypes.object,
}

About.defaultProps = {
  data: `{}`,
}

export default About