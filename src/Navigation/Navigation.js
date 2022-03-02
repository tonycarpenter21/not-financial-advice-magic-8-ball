import "./Navigation.css"
import React from "react"

const Navigation = () => {
  return(
    <nav className="navigation">
      <div className="logo">Not Financial Advice Magic 8 Ball</div>
      <div className="navigation-links">
        <div className="navigation-link">
         HOME
        </div>
        <div className="separator"></div>
        <div className="navigation-link">
         FAVORITES
        </div> 
      </div>
    </nav>
  )
}

export default Navigation