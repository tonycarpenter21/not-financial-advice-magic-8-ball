import "./Navigation.css"
import React from "react"

const Navigation = () => {
  return(
    <nav className="navigation">
      <div className="logo">Not Financial Advice Magic 8 Ball</div>
      <div className="navigation-links">
        HOME <span className="separator">|</span> FAVORITES
      </div>
    </nav>
  )
}

export default Navigation