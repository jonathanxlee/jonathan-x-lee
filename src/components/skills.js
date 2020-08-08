import React from "react"
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import SkillGraphic from "../components/skillgraphic";
import SectionHeader from "../components/sectionHeader";
import TrackVisibility from 'react-on-screen';

const skillData = [
      { Name: 'js' },
      { Name: 'react' },
      { Name: 'python' },
      { Name: 'node' },
      { Name: 'java' },
      { Name: 'css' },
      { Name: 'd3' },
      { Name: 'sql' }
    ]

const FullCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-content: center; 
    width: 100%;
    align-items: left;
    text-align: left;
`

const CenteredCard = styled.div`
    align-self: center;
`

const Skills = ({data}) => {

    const isPhablet = useMediaQuery({ query: '(max-width: 768px)' });
    const size = isPhablet? 400: 600;

    return(
        <FullCard>
            <SectionHeader>my skills.</SectionHeader>
            <CenteredCard>
                <Fade bottom>
                    <TrackVisibility>
                        <SkillGraphic data={skillData} width={size} height={size}></SkillGraphic>
                    </TrackVisibility>
                </Fade>
            </CenteredCard>
        </FullCard>
    )
};

Skills.propTypes = {
    data: PropTypes.array.isRequired,
};
  
Skills.defaultProps = {
    data: {},
}

export default Skills