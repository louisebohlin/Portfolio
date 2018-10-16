import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import "./projectpage.css"
import projectsJson from "../projects.json"
import Footer from "./footer/footer.js"

class Projectpage extends React.Component {

  render() {

    const id = this.props.match.params.id
    const project = projectsJson.projects[id - 1]

    return (
      <div className="projectpage-container">
        <div className="intro-div">
          <img src={project.image}/>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        <div className="specs-div">
          <h1>Tech Specs</h1>
            <div className="specs-lists">
              <div className="list">
                <h3>Code</h3>
                  <ul>
                    <li>{project.codespecs}</li>
                  </ul>
              </div>
              <div className="list">
                <h3>Toolbox</h3>
                  <ul>
                    <li>{project.toolboxspecs}</li>
                  </ul>
              </div>
              <div className="list">
                <h3>More</h3>
                  <ul>
                    <li>{project.morespecs}</li>
                  </ul>
              </div>
            </div>
        </div>
        <Footer />
      </div>
    )
  }

}

export default Projectpage
