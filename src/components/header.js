import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import headerStyles from "../styles/header.module.css";
import { CSSTransition } from 'react-transition-group';
import { HamburgerSpin } from 'react-animated-burgers';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  z-index: 900;
  top: 0px;
  display: grid;
  grid-template-areas: "logo nav";
  padding: 2rem 3rem 1rem 3rem;
  width: 100%;
  max-width: 100%;
  background-color: var(--theme-light);
  text-align: left;
  
  @media(max-width:900px){
    grid-template-areas: 'logo hamburger' '. nav';
  }
`

const StyledLogo = styled.div`
  grid-area: logo;
`

const StyledNav = styled.nav`
  grid-area: nav;
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-items: end;
  text-align: right;

  @media(max-width:900px){
    grid-area: nav;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: none;
    grid-row-gap: 0.5rem;
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
      <StyledHeader>
        <div className={headerStyles.hamburgerStyle}>
          <HamburgerSpin className={headerStyles.hamburgerStyle} isActive={isActive} toggleButton={toggleVisible}  />
        </div>
        <StyledLogo>
          <h2>{isSmallScreen ? 'jxl':'jonathan lee'}</h2>
        </StyledLogo>
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
          <StyledNav>
            {/* change this into props.children to make reusable */}
            <Link to='/#about' className={headerStyles.linkHeader}><h4>about</h4></Link>
            <Link to='/#education' className={headerStyles.linkHeader}><h4>education</h4></Link>
            <Link to='/#experience' className={headerStyles.linkHeader}><h4>experience</h4></Link>
            <Link to='/#skills' className={headerStyles.linkHeader}><h4>skills</h4></Link>
          </StyledNav>
        </CSSTransition>
      </StyledHeader>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
