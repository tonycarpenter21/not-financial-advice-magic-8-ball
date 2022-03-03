import React from "react";
import { Link } from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => {
  return(
    <div className="page-not-found-message">
      <div className="page-not-found-message-title">404 Error - Page Not Found</div>
      <div>Please return to the <Link to="/">Home Page</Link> or the <Link to="favorites">Favorites Page</Link></div>
    </div>
  )
}

export default PageNotFound;