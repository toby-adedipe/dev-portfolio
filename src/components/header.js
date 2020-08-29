import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./header.css"
import { Location } from "@reach/router"

const HomeSVG = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="20.4"
    viewBox="0 0 24 20.4"
    className={className}
  >
    <path
      id="ic_home_24px"
      d="M11.6,23.4V16.2h4.8v7.2h6V13.8H26L14,3,2,13.8H5.6v9.6Z"
      transform="translate(-2 -3)"
      fill="#fff"
    />
  </svg>
)
const ProjectsSVG = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="33"
    viewBox="0 0 24 33"
    className={className}
  >
    <path
      id="ic_developer_mode_24px"
      d="M8.5,7h15v3h3V4a3,3,0,0,0-3-2.985L8.5,1a3.009,3.009,0,0,0-3,3v6h3ZM21.115,24.385,28,17.5l-6.885-6.885L19,12.745,23.755,17.5,19,22.255ZM13,22.255,8.245,17.5,13,12.745l-2.115-2.13L4,17.5l6.885,6.885ZM23.5,28H8.5V25h-3v6a3.009,3.009,0,0,0,3,3h15a3.009,3.009,0,0,0,3-3V25h-3Z"
      transform="translate(-4 -1)"
      fill="#fff"
    />
  </svg>
)

const AboutSVG = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      id="ic_person_24px"
      d="M16,16a6,6,0,1,0-6-6A6,6,0,0,0,16,16Zm0,3C12,19,4,21.01,4,25v3H28V25C28,21.01,20.005,19,16,19Z"
      transform="translate(-4 -4)"
      fill="#fff"
    />
  </svg>
)
const LinkedInSVG = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="23.935"
    viewBox="0 0 24 23.935"
    className={className}
  >
    <g id="Group_5" data-name="Group 5" transform="translate(72.085 -598.412)">
      <path
        id="Path_11"
        data-name="Path 11"
        d="M3677.886,3390a2.87,2.87,0,1,1-2.886,2.854A2.892,2.892,0,0,1,3677.886,3390Z"
        transform="translate(-3747.085 -2791.588)"
        fill="#fff"
        fill-rule="evenodd"
      />
      <path
        id="Path_12"
        data-name="Path 12"
        d="M3691.184,3650.989h-3.373a.8.8,0,0,1-.811-.778v-14.4a.8.8,0,0,1,.811-.811h3.373a.8.8,0,0,1,.778.811v14.4A.789.789,0,0,1,3691.184,3650.989Z"
        transform="translate(-3758.695 -3028.642)"
        fill="#fff"
        fill-rule="evenodd"
      />
      <path
        id="Path_13"
        data-name="Path 13"
        d="M3952.5,3628.448a5.447,5.447,0,0,0-5.481-5.449h-.843a4.825,4.825,0,0,0-3.989,2.076,1.813,1.813,0,0,0-.26.422h-.065v-1.784a.325.325,0,0,0-.324-.324h-4.216a.349.349,0,0,0-.324.324v15.341a.349.349,0,0,0,.324.324h4.314a.325.325,0,0,0,.324-.324V3630.2a2.8,2.8,0,0,1,4.768-2.011,2.879,2.879,0,0,1,.811,1.978v8.886a.325.325,0,0,0,.324.324h4.314a.325.325,0,0,0,.324-.324v-10.605Z"
        transform="translate(-4000.588 -3017.031)"
        fill="#fff"
        fill-rule="evenodd"
      />
    </g>
  </svg>
)
const GithubSVG = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="23.4"
    viewBox="0 0 24 23.4"
    className={className}
  >
    <path
      id="Icon_awesome-github"
      data-name="Icon awesome-github"
      d="M8.027,19.4c0,.1-.111.174-.252.174-.16.015-.271-.063-.271-.174s.111-.174.252-.174S8.027,19.293,8.027,19.4Zm-1.5-.218c-.034.1.063.208.208.237a.227.227,0,0,0,.3-.1c.029-.1-.063-.208-.208-.252A.248.248,0,0,0,6.523,19.187ZM8.661,19.1c-.14.034-.237.126-.223.237s.14.16.285.126.237-.126.223-.223S8.8,19.09,8.661,19.1ZM11.845.563A11.6,11.6,0,0,0,0,12.369,12.131,12.131,0,0,0,8.2,23.943c.619.111.837-.271.837-.585s-.015-1.955-.015-2.971c0,0-3.387.726-4.1-1.442,0,0-.552-1.408-1.345-1.771,0,0-1.108-.76.077-.745a2.554,2.554,0,0,1,1.868,1.248,2.558,2.558,0,0,0,3.527,1.011,2.689,2.689,0,0,1,.774-1.631c-2.7-.3-5.434-.692-5.434-5.347a3.667,3.667,0,0,1,1.142-2.85,4.572,4.572,0,0,1,.126-3.285C6.673,5.261,9,6.882,9,6.882a11.431,11.431,0,0,1,6.077,0S17.4,5.256,18.416,5.575a4.57,4.57,0,0,1,.126,3.285,3.761,3.761,0,0,1,1.248,2.85c0,4.669-2.85,5.042-5.555,5.347a2.862,2.862,0,0,1,.823,2.245c0,1.631-.015,3.648-.015,4.045,0,.315.223.7.837.585A12.019,12.019,0,0,0,24,12.369,11.864,11.864,0,0,0,11.845.563ZM4.7,17.251c-.063.048-.048.16.034.252s.189.111.252.048.048-.16-.034-.252S4.766,17.188,4.7,17.251Zm-.523-.392c-.034.063.015.14.111.189a.144.144,0,0,0,.208-.034c.034-.063-.015-.14-.111-.189C4.292,16.8,4.215,16.811,4.181,16.859Zm1.568,1.723c-.077.063-.048.208.063.3.111.111.252.126.315.048s.034-.208-.063-.3C5.956,18.519,5.811,18.5,5.748,18.582ZM5.2,17.871c-.077.048-.077.174,0,.285s.208.16.271.111a.221.221,0,0,0,0-.3C5.4,17.856,5.274,17.808,5.2,17.871Z"
      transform="translate(0 -0.563)"
      fill="#fff"
    />
  </svg>
)
const EmailSVG = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="19.04"
    viewBox="0 0 24 19.04"
    className={className}
  >
    <g
      id="Icon_ionic-md-mail-unread"
      data-name="Icon ionic-md-mail-unread"
      transform="translate(-2.25 -4.5)"
    >
      <path
        id="Path_14"
        data-name="Path 14"
        d="M32.5,7.81a3.31,3.31,0,1,1-3.31-3.31A3.31,3.31,0,0,1,32.5,7.81Z"
        transform="translate(-6.246 0)"
        fill="#fff"
      />
      <path
        id="Path_15"
        data-name="Path 15"
        d="M20.4,12.008l-6.564,4.376-9.1-6.067V8.108l9.1,6.067,5.229-3.486A4.651,4.651,0,0,1,19,5.625H4.459A2.214,2.214,0,0,0,2.25,7.834V21.628a2.214,2.214,0,0,0,2.209,2.209h18.76a2.214,2.214,0,0,0,2.209-2.209V12.044a4.656,4.656,0,0,1-5.028-.036Z"
        transform="translate(0 -0.297)"
        fill="#fff"
      />
    </g>
  </svg>
)

const MediumSVG = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      id="Icon_awesome-medium"
      data-name="Icon awesome-medium"
      d="M0,2.25v24H24v-24ZM19.939,7.934,18.654,9.166a.378.378,0,0,0-.145.359v9.07a.369.369,0,0,0,.145.359l1.259,1.232v.273H13.591V20.2l1.3-1.264c.129-.129.129-.166.129-.359V11.239L11.4,20.432h-.488L6.7,11.239V17.4a.847.847,0,0,0,.236.707l1.693,2.052v.273H3.814v-.273l1.693-2.052a.82.82,0,0,0,.22-.707V10.275a.612.612,0,0,0-.2-.525L4.018,7.934V7.661H8.695l3.611,7.929,3.177-7.923h4.457Z"
      transform="translate(0 -2.25)"
      fill="#fff"
    />
  </svg>
)

const Header = ({ siteTitle }) => {
  const [home, setHome] = useState("dot")
  const [projects, setProjects] = useState("disabled-dot")
  const [about, setAbout] = useState("disabled-dot")

  const CheckLocation = () => (
    <Location>
      {({ location }) => {
        if (location.pathname === "/") {
          setHome("dot")
          setProjects("disabled-dot")
          setAbout("disabled-dot")
        } else if (location.pathname === "/projects") {
          setHome("disabled-dot")
          setProjects("dot")
          setAbout("disabled-dot")
        } else if (location.pathname === "/about") {
          setHome("disabled-dot")
          setProjects("disabled-dot")
          setAbout("dot")
        }
      }}
    </Location>
  )

  return (
    <header>
      <CheckLocation />
      <div className="header-container">
        <div className="link-container">
          <Link to="/">
            <HomeSVG className={"home-icon"} />
          </Link>
          <div className={home}></div>
        </div>
        <div className="link-container">
          <Link to="/projects">
            <ProjectsSVG />
          </Link>
          <div className={projects}></div>
        </div>
        <div className="link-container">
          <Link to="/about">
            <AboutSVG className={"about-icon"} />
          </Link>
          <div className={about}></div>
        </div>
      </div>
      <div className="external-links">
        <a href="https://www.linkedin.com/in/oluwatobi-adedipe/">
          <LinkedInSVG className={"linkedin-icon"} />
        </a>
        <a href="https://github.com/toby-adedipe">
          <GithubSVG className={"github-icon"} />
        </a>
        <a href="mailto:adedipe.toby@gmail.com">
          <EmailSVG className={"email-icon"} />
        </a>
        <a href="https://medium.com/@toby_adedipe">
          <MediumSVG className={"medium-icon"} />
        </a>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
