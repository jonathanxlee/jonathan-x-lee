import React from "react"
import styled from 'styled-components';
import { green } from "color-name";
import PropTypes from "prop-types"


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
    width: 100%;
    align-items: left;
`

const MenuBar = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-left: 0;
    margin-bottom: 1em;
    border-bottom: 1px solid lightgrey;
`

const MenuTab = styled.div`
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
    text-align: center;
    border: none;
    outline: none;
    background: none;

    :hover{
        color: red;
    }

    &.active{
        color: red;
    }
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
                        console.log(active + " and " + i);

                        return(
                            <MenuTab>
                                <MenuButton className={className} onClick={event => handleClick(event)}>
                                    <h3 id={i}>{work.company}</h3>
                                </MenuButton>
                            </MenuTab>
                        );
                    })}
                </MenuBar>
            </MenuContainer>
            <StyledCard>
                <h3>{job.title} @{job.company}</h3>
                <h4>{job.start_date} - {job.end_date}</h4>
                <ul>
                    {job.bullets.map((item,i) => (
                        <DetailListItme id={i}><p>{item}</p></DetailListItme>
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
    data: {},
}

export default Work
