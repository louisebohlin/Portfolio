import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import "./startpage.css"
import Workexample from "./workexample/workexample.js"
import Skills from "./skills/skills.js"
import Studies from "./studies/studies.js"
import Footer from "./footer/footer.js"
//import projectsJson from "../projects.json"
import Projectpage from "./projectpage"

// <div>
//   {projectsJson.projects.map((project) => {
//     return <Projectpage title={project.name}
//           id={project.id}
//           image={project.image}
//           title={project.title}
//           description={project.description}
//           codespecs={project.codespecs}
//           toolboxspecs={project.toolboxspecs}
//           more={project.more}/>
//         })}
// </div>

class Startpage extends React.Component {

  render() {
    return (
      <div className="landingpage-container">
        <div className="presentation">
          <div className="image-div">
            <img src="./images/snottys.jpg" alt="Louise" />
            <p>louisebp@gmail.com +46707425010</p>
          </div>
          <div className="presentationtext">
            <div>
              <h3>Louise Böhlin Pihlsgård</h3>
              <h1>Frontend developer + Graphic Designer</h1>
            </div>
            <div>
              <p>Hello! I&#39;m an outgoing introvert who loves clean code, nice design and mind blowing technology. I have a diverse background in tech, humanities and design and dream about working with passionate people in a stimulating environment.</p>
              <a href="https://github.com/louisebohlin" target="_blank"><button>See my Github</button></a>
            </div>
          </div>
        </div>
        <div className="tech-div">
          <h1>Tech</h1>
          <h3>480 coding hours  ✨  50+ individual tasks ✨  HTML5, CSS, SASS, Flexbox, Javascript, ES6, JSX, React, Node.js, API:s ✨ 6 sprints with demos together with companies like Volumental, Bonnier, Comprend, Svenska Spel @ Technigo
          </h3>
        </div>
        <Workexample />
        <Skills />
        <Studies />
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/louise-b%C3%B6hlin-pihlsg%C3%A5rd-96687010b/" target="_blank"><button>See my Linkedin</button></a>
        </div>
        <Footer />
      </div>

    )
  }

}

export default Startpage
