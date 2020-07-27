import PropTypes from "prop-types"
import React from "react"
import blockStyles from "../styles/block.module.css"
const data = require("../content/education.json");

const Education = ({ }) => (
  <div className={blockStyles.block}>
    {data.schools.map((school,i) => (
            <div id={i} className={blockStyles.subBlock}>
                <h2 className='section-header'>{school.degree} <span className='text-muted'> - {school.name}</span></h2>
                <h3 className='subtitle'>{school.years}</h3>
                <p>courses: {school.courses}</p> 
            </div>
        ))
    }
    <p>{data.body}</p> 
  </div>
)

export default Education