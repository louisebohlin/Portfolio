import React from "react"
import "./skills.css"

class Skills extends React.Component {

  render() {
    return (
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="allskills">
          <div className="skill">
            <h3>Code</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascrips ES6</li>
              <li>React</li>
              <li>SASS</li>
              <li>Github</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="skill">
            <h3>Toolbox</h3>
            <ul>
              <li>Atom</li>
              <li>Postman</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Indesign</li>
              <li>Unity</li>
              <li>Slack</li>
              <li>Unreal Engine (upcoming!)</li>
            </ul>
          </div>
          <div className="skill">
            <h3>More</h3>
            <ul>
              <li></li>
              <li>Agile Methodology</li>
              <li>Humanities studies</li>
              <li>Retail service experience</li>
              <li>Former professional book adviser</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default Skills
