import React from "react"
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import PropTypes from "prop-types";
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

const Skills = ({data}) => {

    return(
        <div>
            <SectionHeader>my skills.</SectionHeader>
            <Fade bottom>
                <TrackVisibility>
                    <SkillGraphic data={skillData} width={600} height={600}></SkillGraphic>
                </TrackVisibility>
            </Fade>
        </div>
    )
};

Skills.propTypes = {
    data: PropTypes.array.isRequired,
};
  
Skills.defaultProps = {
    data: {},
}

export default Skills