import './HomeView.css'
import React from 'react'

const HomeView = () => {
  return(
    <div className="home-container">
      <div className="welcome-message">
        <div className="welcome-message-header">
          Welcome to the NOT FINANCIAL ADVICE MAGIC 8 BALL! 
        </div>
        <div className="welcome-message-body">
          This tool is an excellent way find out about different investment strategies or new topics to research. None of it’s recommendations should be taken as financial advice. May the odds be ever in your favor.
        </div>
      </div>
      <div className="eight-ball-container">
        <div className="ball">
        <div className="eight hidden">
          8
        </div>
        <div className="window ">
          <div className="eight-ball-message">
            Buy APPL Stock
            <button className="favorite-button">Favorite</button>
          </div>
        </div>
        </div>
      </div>
      <div className="advice-type-container">
        Pick Your Investment Inspiration Type:
        <div className="advice-type-button-container">
          <button className="advice-type-button">Stocks</button>
          <button className="advice-type-button">Both</button>
          <button className="advice-type-button">Crypto</button>
        </div>
      </div>
    </div>
  )
}

export default HomeView