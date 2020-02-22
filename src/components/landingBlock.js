import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import Fade from "react-reveal/Fade"

const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 100%;
    height: 100vh;
`

const LandingBlock = ({ children }) => (
    <div>
        <Fade left big cascade>
            <Block>
                {children}
            </Block>
        </Fade>
    </div>
)

LandingBlock.propTypes = {
    children: PropTypes.node.isRequired,
  }

export default LandingBlock