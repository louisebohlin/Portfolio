import React from "react"
import "./workexample.css"

class Workexample extends React.Component {

  render() {
    return (
      <div className="workexample-container">
        <div className="workexample">
          <h4>Project 1</h4> <img src="./images/form.png"/>
        </div>
        <div className="workexample">
          <h4>Project 2</h4>
        </div>
        <div className="workexample">
          <h4>Project 3</h4>
        </div>
        <div className="workexample">
          <h4>Project 4</h4>
        </div>
      </div>
    )
  }

}

export default Workexample
