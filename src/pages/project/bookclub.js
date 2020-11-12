import React, { useState, useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { projects } from "../../data"

const BookClub = () => {
  const [project, setProject] = useState([])

  useEffect(() => setProject(projects[1]), [])

  return (
    <Layout>
      <SEO title="BookClub" />
      <div className="projects-container">
        <h2>{project.name}</h2>
        <div>{project.description}</div>
      </div>
    </Layout>
  )
}

export default BookClub
