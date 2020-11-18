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
        <div className="image-container">
          <img src={require('../../images/bookclub/1.png')} className="web-images" />
          <img src={require('../../images/bookclub/2.png')} className="web-images" />
        </div>
        <div className="image-container">
          <img src={require('../../images/bookclub/3.png')} className="mobile-images" />
          <img src={require('../../images/bookclub/4.png')} className="mobile-images" />
        </div>
        <div>{project.description}</div>
      </div>
    </Layout>
  )
}

export default BookClub
