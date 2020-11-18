import React, { useState, useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { projects } from "../../data"

const Orange = () => {
  const [project, setProject] = useState([])

  useEffect(() => setProject(projects[3]), [])

  return (
    <Layout>
      <SEO title="Would You Rather" />
      <div className="projects-container">
        <h2>{project.name}</h2>
        <div className="image-container">
          <img src={require('../../images/wouldyourather/1.png')} className="web-images" />
          <img src={require('../../images/wouldyourather/2.png')} className="web-images" />
          <img src={require('../../images/wouldyourather/3.png')} className="web-images" />
          <img src={require('../../images/wouldyourather/4.png')} className="web-images" />
        </div>
        <div>{project.description}</div>
      </div>
    </Layout>
  )
}

export default Orange
