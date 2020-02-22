import React from "react"
import styled from 'styled-components';
import { green } from "color-name";
import PropTypes from "prop-types"

const tabWidth = 200;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-content: center; 
    width: 100%
    align-items: left;
    text-align: left;
    
`

const MenuContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    align-items: left;
`

const MenuBar = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-left: 0;
    border-bottom: 3px solid lightgrey;
`

const MenuTab = styled.div`
    float: left;
    max-width: ${tabWidth}px;
    padding: 1rem;
`

const MenuButton = styled.button`
    display: flex;
    justify-content: center;
    width: ${tabWidth}px; 
    border: none;
    outline: none;
    background: none;
    padding: 0;
    easing: ;
    transition: all 0.25s ease-in-out 0.1s;

    :hover {
        background-color: lightgrey;
        color: red;
    }

    &.active{
        color: red;
    }
`

// Thank you to Brittany Chiang's Menu for providing the understanding I needed to make this menu bar
// https://github.com/bchiang7/v4/blob/master/src/components/sections/jobs.js

const MenuHighlight = styled.span`
    display: block; 
    background-color: red; 
    position: absolute;
    z-index: 10;
    bottom: 0;
    height: 3px;
    width: ${tabWidth}px;
    transition: all 0.25s ease-in-out 0.1s;
    
    transform: translateX(
        ${props => (props.active > 0 ? props.active * tabWidth : 0)}px
    );
`


const DetailList = styled.ul`
    list-style-type: none;
`

const DetailListItme = styled.li`
    font-size: var(--font-s);
    margin: 1rem;
`

const StyledCard = styled.div``

const Work = ({data}) => {
    
    const [job, setJob] = React.useState(data[0]);
    const [active, setActive] = React.useState(0);

    const handleClick = (event) => {
        setJob(data[event.target.id]);
        setActive(event.target.id);
    }
    
    return(
        <Card>
            <MenuContainer>
                <MenuBar>
                    {data.map(function(work,i) {
                        const className = active == i ? 'active' : 'inactive';

                        return(
                            <MenuButton id={i} className={className} onClick={event => handleClick(event)}>
                                <h3 id={i}>{work.short_company}</h3>
                            </MenuButton>
                        );
                    })}
                </MenuBar>
                <MenuHighlight active={active}></MenuHighlight>
            </MenuContainer>
            <StyledCard>
                <h3>{job.title} @{job.company}</h3>
                <h4>{job.start_date} - {job.end_date}</h4>
                <DetailList>
                    {job.bullets.map((item,i) => (
                        <DetailListItme id={i}><p>{item}</p></DetailListItme>
                        ))}
                </DetailList>
            </StyledCard>
        </Card>
    )
}

Work.propTypes = {
    data: PropTypes.array.isRequired,
};
  
Work.defaultProps = {
    data: {},
}

export default Work
