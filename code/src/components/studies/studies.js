import React from "react"
import "./studies.css"

class Studies extends React.Component {

  render() {
    return (
      <div className="studies-container">
        <h1>Studies</h1>
        <div className="allstudies">
          <div className="study">
            <h3>Frontend Developer</h3>
            <h4>Technigo</h4>
            <p>Full-time 12 week boot camp/intensive program. Covering everything from the basics of programming to how to structure and build bigger web projects. Focus on Javascript. Total 480 coding hours, 50+ individual tasks (in HTML5, CSS, Javascript, JSX, React, Node.js) and 6 sprints with demos together with companies like Volumental, Bonnier News and Comprend. Stockholm sep-nov 2018</p>
          </div>
          <div className="study">
            <h3>HTML and CSS3</h3>
            <h4>Tjejer Kodar</h4>
            <p>3 day intensive course . Build a portfolio in HTML & CSS. Ekskäret april 2018</p>
          </div>
          <div className="study">
            <h3>Fil. kand. in Art History</h3>
            <h4>Stockholm University</h4>
            <p>Methodology and theory in art history studies with focus on architecture and heritage protection. Stockholm 2004-11</p>
          </div>
          <div className="study">
            <h3>University Diploma in Real Estate Agency</h3>
            <h4>Malmö Högskola</h4>
            <p>Law, economy, psychology, physics and everything else you need as a real estate broker. Malmö 2005-07</p>
          </div>
          <div className="study">
            <h3>Kulturvetarprogrammet</h3>
            <h4>Stockholm University</h4>
            <p>Humanities studies preparing for further work in the cultural field. Stockholm 2009-12</p>
          </div>
          <div className="study">
            <h3>Basic course in game development</h3>
            <h4>Future Games</h4>
            <p>2 day intensive course. Introduction to the basics of game development in Unreal Engine. Stockholm november 2018 (upcoming!)</p>
          </div>
        </div>
      </div>
    )
  }

}

export default Studies
