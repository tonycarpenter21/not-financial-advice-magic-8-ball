import "./Navigation.css"
import React from "react"
import { Link } from 'react-router-dom'

const Navigation = () => {
  return(
    <nav className="navigation">
      <Link to="/">
        <div className="logo">Not Financial Advice Magic 8 Ball</div>
      </Link>
      <div className="navigation-links">
        <Link to="/">
          <div className="navigation-link">HOME</div>
        </Link>
        <div className="separator"></div>
        <Link to="/favorites">
          <div className="navigation-link">FAVORITES</div> 
        </Link>
      </div>
    </nav>
  )
}

export default Navigation