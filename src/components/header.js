import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import headerStyles from "../styles/header.module.css";
import { CSSTransition } from 'react-transition-group';
import { HamburgerSpin } from 'react-animated-burgers';
import Fade from "react-reveal/Fade";
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: grid;
  grid-template-areas: "logo nav";
  max-width: 100%;
  text-align: left;
  
  @media(max-width:900px){
    grid-template-areas: 'logo hamburger' 'nav nav';
  }
`

const StyledNav = styled.nav`
  grid-area: nav;
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: right;
  text-align: right;

  @media(max-width:900px){
    grid-template-rows: repeat(4, auto);
    grid-template-columns: none;
    grid-row-gap: 2rem;
  }

`

const Header = ({ siteTitle }) => {
  const [isActive, setIsActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleVisible = () => {
    setIsActive(!isActive);
  };
  
  return(
    <div>
      <StyledHeader className={headerStyles.headerBasic}>
        <div className={headerStyles.hamburgerStyle}>
          <HamburgerSpin className={headerStyles.hamburgerStyle} isActive={isActive} toggleButton={toggleVisible}  />
        </div>
          <CSSTransition
            in={!isSmallScreen || isActive}
            timeout={350}
            classNames={{
              enter: `${headerStyles.navAnimationEnter}`,
              enterActive: `${headerStyles.navAnimationEnterActive}`,
              exit: `${headerStyles.navAnimationExit}`,
              exitActive: `${headerStyles.navAnimationExitActive}`
            }}
            unmountOnExit>
            <Fade top big>
              <StyledNav>
                {/* change this into props.children to make reusable */}
                <Link to='/#about' className={headerStyles.linkHeader}>about</Link>
                <Link to='/#education' className={headerStyles.linkHeader}>education</Link>
                <Link to='/#skills' className={headerStyles.linkHeader}>skills</Link>
                <Link to='/#projects' className={headerStyles.linkHeader}>projects</Link>
              </StyledNav>
            </Fade>
          </CSSTransition>
      </StyledHeader>
    </div>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
