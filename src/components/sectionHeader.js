import React from "react"
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";


const SectionTitleDiv = styled.div`
    display: flex;
    margin-bottom: 25px;
`

const SectionTitle = styled.h2`
    font-size: 7rem;
    justify-self: flex-start;; 
`

const SectionHeader = ({ children, invert }) => {
    
    return(
        <div>
            <SectionTitleDiv>
                <SectionTitle>
                    {children}
                </SectionTitle>
            </SectionTitleDiv>
        </div>
    )
}

  
export default SectionHeader;
