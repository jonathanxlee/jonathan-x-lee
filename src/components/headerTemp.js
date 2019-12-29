import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import headerStyles from "../styles/header.module.css"

const Header = ({ siteTitle }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleVisible = () => {
    setIsActive(!isActive);
  };

  return(
    <div>
      <header className={headerStyles.headerBasic}>
        <div className={headerStyles.hamburger}>
          <button class={isActive ? "hamburger hamburger--spin  is-active" : "hamburger hamburger--spin"} type="button" onClick={toggleVisible}>
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
          {isActive &&
          <nav className={headerStyles.navBasic}>
            <Link to='#about' className={headerStyles.linkHeader}>about</Link>
            <Link to='#about' className={headerStyles.linkHeader}>education</Link>
            <Link to='#about' className={headerStyles.linkHeader}>skills</Link>
            <Link to='#about' className={headerStyles.linkHeader}>projects</Link>
          </nav>}
        </div>
        <nav className={headerStyles.navBasic}>
            <Link to='#about' className={headerStyles.linkHeader}>about</Link>
            <Link to='#about' className={headerStyles.linkHeader}>education</Link>
            <Link to='#about' className={headerStyles.linkHeader}>skills</Link>
            <Link to='#about' className={headerStyles.linkHeader}>projects</Link>
        </nav>
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
