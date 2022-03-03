import React from "react";
import { Link } from 'react-router-dom'
import './PageNotFound.css'
import PageNotFoundGif from './PageNotFound.gif'

const PageNotFound = () => {
  return(
    <div className="page-not-found-message">
      <img src={PageNotFoundGif} alt="Page Not Found" className="not-found-gif"/>
      <div className="page-not-found-message-title">404 Error - Page Not Found</div>
      <div>Please return to the <Link to="/">Home Page</Link> or the <Link to="favorites">Favorites Page</Link></div>
    </div>
  )
}

export default PageNotFound;