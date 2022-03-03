import './HomeView.css'
import React, { Component } from 'react'

let tips = [
  "Buy Some Shares of Apple Stock",
  "Buy MSFT Puts",
  "Buy CISCO Calls",
  "Buy Gold",
  "Mortgage Your Home For NFTs Of Cartoon Monkeys",
  "Buy OTM 1 DTE SPY Calls",
  "Buy Bitcoin Futures With 5x+ Leverage",
  "Liquidate Your 401k To Buy GameStop Shares",
  "Buy Coinbase Shares Because Buying Crypto Is Complicated",
  "Ask For Your Inheritance Early and Buy Crypto With A Dog On It",
  "Buy Whatever People On Reddit Say To Buy",
  "Costanza Method: Research MSFT, Come To A Conclusion, and Do The Opposite",
  "Open a Buy Limit Order and Let Your Cat Walk Across Your Keyboard"
]

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      currentTip: "undefined",
    }
  }

  randomTip = () => {
    this.setState( {currentTip: tips[Math.floor(Math.random() * tips.length)]} )
  }

  render() {
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
          { this.state.currentTip === "undefined" ? (
              <div className="eight">
                8
              </div>
          ) : (
              <div className="window ">
                <div className="eight-ball-message">
                  {this.state.currentTip}
                  <button className="favorite-button">Favorite</button>
                </div>
              </div>
            )
          }
        </div>
      </div>
      <div className="advice-type-container">
        Pick Your Investment Inspiration Type:
        <div className="advice-type-button-container">
          <button className="advice-type-button" onClick={this.randomTip}>Stocks</button>
          <button className="advice-type-button">Both</button>
          <button className="advice-type-button">Crypto</button>
        </div>
      </div>
    </div>
    )
  }
}

export default HomeView