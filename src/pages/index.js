import React from "react"
import { Link } from "gatsby"
import ArrowRight from "../images/chevron-right.svg"
import Hero from "../images/hero.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <p className="tags">{"<body>"}</p>
      <div className="body-container">
        <p className="tags">{"<h1>"}</p>
        <div className="name-header home-content">
          <h1>Hi,</h1>
          <h1>I'm Oluwatobi</h1>
          <h3>Web & Mobile developer</h3>
        </div>
        <p className="tags">{"</h1>"}</p>
        <img src={Hero} alt="hero" className="hero-image" />
        <p>
          <span className="tags">{"<p>"}</span>
          <span className="home-description home-content">
            I'm a Front End & mobile engineer.
          </span>
          <span className="tags">{"</p>"}</span>
        </p>
        <p className="btn-container">
          <span className="tags">{"<button>"}</span>
          <Link to="/projects" className="projects-link">
            <span className="btn">
              <span>SEE WHAT I'VE DONE </span>
              <img src={ArrowRight} alt="arrow-right" className="icon" />
            </span>
          </Link>
          <span className="tags">{"</button>"}</span>
        </p>
      </div>
      <p className="tags">{"</body>"}</p>
    </div>
  </Layout>
)

export default IndexPage
