import PropTypes from "prop-types"
import React from "react"
import aboutStyles from "../styles/block.module.css"
import styled from 'styled-components';
import { green } from "color-name";

const MenuSection = styled.div`
    max-width: 90%;
    width 700%;
    border-bottom: 10px;
`

const MenuBar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

const MenuTab = styled.li`
    float: left;
`

const MenuButton = styled.button`
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: underline;
    border: none;

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
        <MenuSection> 
            <MenuBar>
                <MenuTab id='0'><MenuButton id='0' onClick={event => handleClick(event)}><h3 id='0'>software engineering intern</h3></MenuButton></MenuTab>
                <MenuTab id='1'><MenuButton id='1' onClick={event => handleClick(event)}><h3 id='1'>salesforce developer</h3></MenuButton></MenuTab>
                <MenuTab id='2'><MenuButton id='2' onClick={event => handleClick(event)}><h3 id='2'>ml research assistant</h3></MenuButton></MenuTab>
            </MenuBar>
            <h1>{value}</h1>
        </MenuSection>
    )
    
}



export default Work