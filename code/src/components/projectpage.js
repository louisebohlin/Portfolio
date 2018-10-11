import React from "react"
import "./projectpage.css"
const projectsJson = require("../projects.json")
import Footer from "./footer/footer.js"

class Projectpage extends React.Component {

  render() {
    return (
      <div className="projectpage-container">
          {productsJson.projects.map((product) => {
            return <Product title={product.name}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  codespecs={project.codespecs}
                  toolboxspecs={project.toolboxspecs}
                  more={project.more}/>
        })}
        
        <div className="intro-div">
          <img src={this.props.image}/>
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
        </div>
        <div className="specs-div">
          <h1>Techs Specs</h1>
            <div className="specs-lists">
              <h3>Code</h3>
                <ul>
                  <li>{this.props.codespecs}</li>
                </ul>
              <h3>Toolbox</h3>
                <ul>
                  <li>{this.props.toolboxspecs}</li>
                </ul>
              <h3>Code</h3>
                <ul>
                  <li>{this.props.morespecs}</li>
                </ul>
            </div>
          <Footer />
        </div>
      </div>
    )
  }

}

export default Projectpage
