import React, { useState, useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { projects } from "../../data"

const Orange = () => {
  const [project, setProject] = useState([])

  useEffect(() => setProject(projects[0]), [])

  return (
    <Layout>
      <SEO title="Orange botswana" />
      <div className="projects-container">
        <h2>{project.name}</h2>
        <div>{project.description}</div>
      </div>
    </Layout>
  )
}

export default Orange
