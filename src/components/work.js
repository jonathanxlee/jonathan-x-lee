import React from "react"
import styled from 'styled-components';
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

const tabWidthRegular = 250;
const tabWidthPhablet = 150;

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
    overflow: auto;
    white-space: nowrap;

`

const MenuBar = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 0;
    border-bottom: 3px solid lightgrey;
    width: 100%;

    @media (max-width: 768px){
        width: ${props => (props.data.size * tabWidthPhablet > 768) ? "max-content ": "100%"};
    }
`

const MenuButton = styled.button`
    display: flex;
    justify-content: center;
    width: ${tabWidthRegular}px; 
    border: none;
    outline: none;
    background: none;
    padding: 0;
    easing: ;
    transition: all 0.25s ease-in-out 0.1s;

    &.active{
        color: red;
    }

    @media (max-width: 768px){
        width: ${tabWidthPhablet}px;
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
    width: ${tabWidthRegular}px;
    transition: all 0.25s ease-in-out 0.1s;
    
    transform: translateX(
        ${props => (props.active > 0 ? props.active * tabWidthRegular : 0)}px
    );

    @media screen and (max-width: 768px){
        width: ${tabWidthPhablet}px;
        transform: translateX(
            ${props => (props.active > 0 ? props.active * tabWidthPhablet : 0)}px
        ); 
    }
`

const DetailList = styled.ul`
    list-style-type: none;
`

const DetailListItme = styled.li`
    font-size: 5vh;
    margin: 1rem;
`

const StyledCard = styled.div``

const Work = ({data}) => {

    const isPhablet = useMediaQuery({ query: '(max-width: 768px)' });
    
    const [job, setJob] = React.useState(data[0]);
    const [active, setActive] = React.useState(0);

    const handleClick = (event) => {
        setJob(data[event.target.id]);
        setActive(event.target.id);
    }
    
    return(
        <Card>
            <MenuContainer>
                <MenuBar data={data}>
                    {data.map(function(work,i) {
                        const className = active == i ? 'active' : 'inactive';
                        const headerText = isPhablet ? ('0' + (i+1) + '.') : work.short_company;

                        return(
                            <MenuButton id={i} className={className} onClick={event => handleClick(event)}>
                                <h3 id={i}>{headerText}</h3>
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
