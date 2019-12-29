import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import aboutStyles from "../styles/block.module.css"

const About = ({ data }) => (
  <div className={aboutStyles.block}>
    <h2 className="section-header">{data.title}</h2>
    <h3 className="subtitle">{data.subtitle}</h3>
    <p>{data.body}</p> 
  </div>
)

About.propTypes = {
  data: PropTypes.object,
}

About.defaultProps = {
  data: `{}`,
}

export default About