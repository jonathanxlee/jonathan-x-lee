import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { green } from "color-name";

const Card = styled.div`
    display: block;
`

const MenuContainer = styled.div`
    display: flex;
`

const MenuBar = styled.ul`
    display: block;
    list-style-type: none;
    margin-left: 0;
    margin-bottom: 0;
`

const MenuTab = styled.li`
    float: left;
    padding: 1em;
    :first-child{
        padding-left: 0;
    }
`

const MenuButton = styled.button`
    display: block;
    color: black;
    text-align: center;
    text-decoration: underline;
    border: none;
    outline: none;

    :hover{
        color: grey;
    }
`


const Work = () => {
    const [value, setValue] = React.useState(0);


    const handleClick = (event) => {
        console.log(event.target.id);
        setValue(event.target.id);
    }
    
    return(
        <div>
            <MenuContainer>
                <MenuBar>
                    <MenuTab id='0'><MenuButton id='0' onClick={event => handleClick(event)}><h3 id='0'>software engineering intern</h3></MenuButton></MenuTab>
                    <MenuTab id='1'><MenuButton id='1' onClick={event => handleClick(event)}><h3 id='1'>salesforce developer</h3></MenuButton></MenuTab>
                    <MenuTab id='2'><MenuButton id='2' onClick={event => handleClick(event)}><h3 id='2'>ml research assistant</h3></MenuButton></MenuTab>
                </MenuBar>
            </MenuContainer>
            <Card>
                <h1>{value}</h1>
            </Card>
        </div>
    )
    
}



export default Work