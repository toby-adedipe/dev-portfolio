import React, { useState, useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { projects } from "../../data"

const Orange = () => {
  const [project, setProject] = useState([])

  useEffect(() => setProject(projects[3]), [])

  return (
    <Layout>
      <SEO title="Night Market" />
      <div className="projects-container">
        <h2>{project.name}</h2>
        <div className="image-container">
          <img src={require('../../images/nightmarket/1.png')} className="mobile-images" />
          <img src={require('../../images/nightmarket/2.png')} className="mobile-images" />
          <img src={require('../../images/nightmarket/3.png')} className="mobile-images" />
          <img src={require('../../images/nightmarket/4.png')} className="mobile-images" />
        </div>
        <div>{project.description}</div>
      </div>
    </Layout>
  )
}

export default Orange
