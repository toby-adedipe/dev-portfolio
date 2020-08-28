import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

import Home from "../images/home.svg"
import Projects from "../images/projects.svg"
import About from "../images/about.svg"
import LinkedIn from "../images/linkedin.svg"
import Github from "../images/github.svg"
import Email from "../images/email.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-container">
      <div>
        <Link to="/">
          <img src={Home} alt="home-icon" className="home-icon" />
        </Link>
        <div></div>
      </div>
      <div>
        <Link to="/projects">
          <img src={Projects} alt="projects-icon" className="projects-icon" />
        </Link>
        <div></div>
      </div>
      <div>
        <Link to="/about">
          <img src={About} alt="about-icon" className="about-icon" />
        </Link>
        <div></div>
      </div>
    </div>
    <div className="external-links">
      <a href="https://www.linkedin.com/in/oluwatobi-adedipe/">
        <img src={LinkedIn} alt="linkedin-icon" className="linkedin-icon" />
      </a>
      <a href="https://github.com/toby-adedipe">
        <img src={Github} alt="github-icon" className="github-icon" />
      </a>
      <a href="mailto:adedipe.toby@gmail.com">
        <img src={Email} alt="email-icon" className="email-icon" />
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
