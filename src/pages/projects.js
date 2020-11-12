import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { projects } from "../data"
import { navigate } from "gatsby"

const SVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="72.81"
    height="33.339"
    viewBox="0 0 72.81 33.339"
    className="project-arrow"
  >
    <g id="Group_4" data-name="Group 4" transform="translate(-431 -628.471)">
      <path
        id="Path_9"
        data-name="Path 9"
        d="M431,645.31h71.81l-20.245-16.056"
        fill="none"
        stroke="#fff"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <path
        id="Path_10"
        data-name="Path 10"
        d="M431,629.254h71.81l-20.245,15.709"
        transform="translate(0 16.056)"
        fill="none"
        stroke="#fff"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </g>
  </svg>
)

const Projects = () => {
  const [projectList, setProjectList] = useState([])

  useEffect(() => setProjectList(projects), [])

  const handleClick = url => {
    navigate(`/project${url}`)
  }

  return (
    <Layout>
      <SEO title="Projects" />
      <div className="projects-container">
        <h1>Projects</h1>
        <hr />
        <div className="projects-list">
          {projectList.map(project => (
            <div className="project-item">
              <div
                className="project-image"
                onClick={() => handleClick(project.navigate)}
                onKeyDown={() => handleClick(project.navigate)}
              >
                {project.name}
              </div>
              <p>{project.name}</p>
              <div className="tool-container">
                {project.tools.map(tool=>(
                  <div>
                    <p className="tools">{tool}</p>
                  </div>
                ))}
              </div>
              {project.link ? (
                <a href={project.link} className="project-link">
                  Visit Website <SVG />
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
