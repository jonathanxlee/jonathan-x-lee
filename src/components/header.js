import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import headerStyles from "../styles/header.module.css"
import { CSSTransition } from 'react-transition-group'
import { HamburgerSpin } from 'react-animated-burgers'
import Fade from "react-reveal/Fade"

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
      <header className={headerStyles.headerBasic}>
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
              <nav className={headerStyles.navBasic}>
                <Link to='/page-2/#about' className={headerStyles.linkHeader}>about</Link>
                <Link to='/page-2/#education' className={headerStyles.linkHeader}>education</Link>
                <Link to='/page-2/#skills' className={headerStyles.linkHeader}>skills</Link>
                <Link to='/page-2/#projects' className={headerStyles.linkHeader}>projects</Link>
              </nav>
            </Fade>
          </CSSTransition>
      </header>
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
