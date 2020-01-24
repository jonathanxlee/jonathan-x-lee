import React from "react"
import styled from 'styled-components';
import { green } from "color-name";
import PropTypes from "prop-types"


const Card = styled.div`
    display: inline-block
    width: 100%
    align-items: left;
    text-align: left;
    
`

const MenuContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: left;
`

const MenuBar = styled.ul`
    display: flex;
    text-align:justify;
    list-style-type: none;
    margin-left: 0;
    margin-bottom: 1em;
    border-bottom: 1px solid lightgrey;
`

const MenuTab = styled.li`
    float: left;
    padding-left: 1em;
    padding-right: 1em;
    margin-bottom: 0.1em;
    :first-child{
        padding-left: 0px;
    }
`

const MenuButton = styled.button`
    display: block;
    color: black;
    text-align: center;
    border: none;
    outline: none;
    padding: 0px;

    :hover{
        color: red;
    }

    &.active{
        color: red;
    }
`

const StyledCard = styled.div`


`


const Work = ({data}) => {
    
    const [job, setJob] = React.useState(data[0]);

    const handleClick = (event) => {
        console.log(event.target.id);
        setJob(data[event.target.id]);
    }
    
    return(
        <Card>
            <MenuContainer>
                <MenuBar>
                    {data.map((work,i) => (
                        <MenuTab>
                            <MenuButton onClick={event => handleClick(event)}>
                                <h3 id={i}>{work.company}</h3>
                            </MenuButton>
                        </MenuTab>
                    ))}
                </MenuBar>
            </MenuContainer>
            <StyledCard>
                <h3>{job.title} @{job.company}</h3>
                <h6>{job.start_date} - {job.end_date}</h6>
                <ul>
                    {job.bullets.map((item,i) => (
                        <li>{item}</li>
                        ))}
                </ul>
            </StyledCard>
            
            
        </Card>
    )
    
}

Work.propTypes = {
    data: PropTypes.array.isRequired,
};
  
Work.defaultProps = {
    data: ``,
}



export default Work