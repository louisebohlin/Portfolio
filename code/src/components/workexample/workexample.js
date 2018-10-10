import React from "react"
import "./workexample.css"

class Workexample extends React.Component {

  render() {
    return (
      <div className="workexample-container">
        <div className="workexample">
          <h4>Flight form with CSS written with SASS.</h4>
          <img src="./images/flightform.jpg" />
        </div>
        <div className="workexample">
          <h4>Product listing page in React.</h4>
          <img src="./images/productpage.png" />
        </div>
        <div className="workexample">
          <h4>Signup form which posts the data into a HTTPbin.</h4>
          <img src="./images/form.png" />
        </div>
        <div className="workexample">
          <h4>Radio player built in React using Sveriges Radios API:s.</h4>
          <img src="./images/radioplayer.png" />
        </div>
      </div>
    )
  }

}

export default Workexample
