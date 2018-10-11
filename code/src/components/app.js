import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Projectpage from "./projectpage"
import Startpage from "./startpage"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="navigation">
          <Route path="/" exact="true" component={Startpage} />
          <Route path="/projectpage/:id" exact="true" component={Projectpage} />
        </div>
      </Router>

    )
  }

}

export default App
