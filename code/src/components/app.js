import React from "react"
import "./app.css"

class App extends React.Component {

  render() {
    return (
      <div className="landingpage-container">
        <div className="presentation">
          <div className="image-div">
            <img src="./src/images/snottys.jpg" alt="Louise" />
            <p>louisebp@gmail.com +46707425010</p>
          </div>
          <div className="presentationtext">
            <h3>Louise Böhlin Pihlsgård</h3>
            <h1>Frontend developer + Graphic Designer</h1>
            <p>Hello world!</p>
          </div>
        </div>
        <div className="tech-div">
          <h1>Tech</h1>
          <h3>480 coding hours 50+ individual tasks HTML5, CSS, SASS, Flexbox, Javascript, ES6, JSX, React, Node.js, API:s 6 sprints with demos together with companies like Volumental, Bonnier, Comprend @ Technigo
          </h3>
        </div>
        <div className="work-div">
        </div>
        <div className="skills-div">
        <h1>Skills</h1>
        </div>
        <div className="studies-div">
        <h1>Studies</h1>
        </div>
      </div>

    )
  }

}

export default App
