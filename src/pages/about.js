import React from "react";
import downloadFile from "../files/WorkResume.pdf";
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About page" />
    <div className="container">
      <div className="about">
        <h2>About</h2>
          <p>
            Hi there, I am a passionate web app developer 
            dedicated to designing and creating products that 
            make people’s lives easier or a little better.
          </p>
          <p>
            I am passionate about creating products and solutions that are
            not only visually pleasing but also impactful. Over the past 3 years
            I've helped build services that have directly or indirectly
            contributed to making peoples lives better.
          </p>
      </div>
      <div className="skills-list">
        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>Bootstrap</li>
          <li>Javascript</li>
          <li>Jquery</li>
          <li>React</li>
          <li>React Native</li>
          <li>Gatsby</li>
          <li>Next</li>
          <li>Redux</li>
          <li>GraphQl</li>
          <li>Google Cloud Platform</li>
          <li>Adobe XD</li>
          <li>Figma</li>
          <li>Sketch</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
        </ul>
      </div>
      <a href={downloadFile} download  className="download-btn">View My Resume</a>

    </div>
  </Layout>
)

export default About
