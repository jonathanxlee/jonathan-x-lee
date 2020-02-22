import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import LandingBlock from "./landingBlock";

const LandingText = styled.h2`
    color: var(--theme-dark);
`

const Landing = ({ data }) => (
    <div>
        <LandingBlock>
            <LandingText>hello.</LandingText>
            <LandingText>my name is jonathan lee</LandingText>
        </LandingBlock>
        <LandingBlock>
            <LandingText>i am developer and engineer</LandingText>
            <LandingText>with a passion for innovating UX design</LandingText>
        </LandingBlock>
        <LandingBlock>
            <LandingText><Link to="/page-2/">let's create together</Link></LandingText>
        </LandingBlock>
    </div>
)


export default Landing