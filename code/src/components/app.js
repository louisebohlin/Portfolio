import React from "react"
import "./app.css"
import Workexample from "./workexample/workexample.js"
import Skills from "./skills/skills.js"
import Studies from "./studies/studies.js"

class App extends React.Component {

  render() {
    return (
      <div className="landingpage-container">
        <div className="presentation">
          <div className="image-div">
            <img src="./images/snottys.jpg" alt="Louise" />
            <p>louisebp@gmail.com +46707425010</p>
          </div>
          <div className="presentationtext">
            <h3>Louise Böhlin Pihlsgård</h3>
            <h1>Frontend developer + Graphic Designer</h1>
            <p>Hello!</p>
          </div>
        </div>
        <div className="tech-div">
          <h1>Tech</h1>
          <h3>480 coding hours  ✨  50+ individual tasks ✨  HTML5, CSS, SASS, Flexbox, Javascript, ES6, JSX, React, Node.js, API:s ✨ 6 sprints with demos together with companies like Volumental, Bonnier, Comprend @ Technigo
          </h3>
        </div>
        <Workexample />
        <Skills />
        <Studies />
      </div>

    )
  }

}

export default App
