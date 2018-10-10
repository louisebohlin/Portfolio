import React from "react"
import "./footer.css"

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <ul>
            <li><h4>Louise Böhlin Pihlsgård</h4></li>
            <li><a href="mailto:louisebp@gmail.com" target="_blank" >louisebp@gmail.com</a></li>
            <li>+46 707425010</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
