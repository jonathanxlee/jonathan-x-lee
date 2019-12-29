import PropTypes from "prop-types"
import React from "react"
import landingStyles from "../styles/landing.module.css"
import Fade from "react-reveal/Fade"

const LandingBlock = ({ children }) => (
    <div>
        <Fade left big cascade>
            <div className={landingStyles.landingPage}>
                {children}
            </div>
        </Fade>
    </div>
)

LandingBlock.propTypes = {
    children: PropTypes.node.isRequired,
  }

export default LandingBlock