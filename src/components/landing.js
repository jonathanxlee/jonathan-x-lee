import { Link } from "gatsby"
import React from "react"
import landingStyles from "../styles/landing.module.css"
import LandingBlock from "./landingBlock"

const Landing = ({ data }) => (
    <div>
        <LandingBlock>
            <h1 className={landingStyles.innerText}>hello.</h1>
            <h2 className={landingStyles.innerText}>my name is jonathan lee</h2>
        </LandingBlock>
        <LandingBlock>
            <h2 className={landingStyles.innerText}>i am developer and engineer</h2>
            <h2 className={landingStyles.innerText}>with a passion for innovating UX design</h2>
        </LandingBlock>
        <LandingBlock>
            <h2 className={landingStyles.innerText}><Link className={landingStyles.innerText} to="/page-2/">let's create together</Link></h2>
        </LandingBlock>
    </div>
)


export default Landing