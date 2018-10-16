import React from "react"
import "./workexample.css"
import { HashRouter as Router, Route, Link } from "react-router-dom"

class Workexample extends React.Component {

  render() {
    return (
        <div className="workexample-container">
          <div className="workexample">
            <h4>Flight form with CSS written with SASS.</h4>
            <Link to="/projectpage/1"><img src="./images/flightform.jpg" /></Link>
          </div>
          <div className="workexample">
            <h4>Product listing page in React.</h4>
            <Link to="/projectpage/2"><img src="./images/productpage.png" /></Link>
          </div>
          <div className="workexample">
            <h4>Signup form which posts the data into a HTTPbin.</h4>
            <Link to="/projectpage/3"><img src="./images/form.png" /></Link>
          </div>
          <div className="workexample">
            <h4>Radio player built in React using Sveriges Radios API:s.</h4>
            <Link to="/projectpage/4"><img src="./images/radioplayer.png" /></Link>
          </div>
          <div className="workexample">
            <h4>Radio player built in React using Sveriges Radios API:s.</h4>
            <Link to="/projectpage/5"><img src="./images/vat.png" /></Link>
          </div>
          <div className="workexample">
            <h4>Radio player built in React using Sveriges Radios API:s.</h4>
            <Link to="/projectpage/6"><img src="./images/snake.png" /></Link>
          </div>
        </div>
    )
  }

}

export default Workexample
