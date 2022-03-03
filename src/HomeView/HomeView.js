import './HomeView.css'
import React, { Component } from 'react'

let stockTips = [
  "Buy Some Shares of ____ Stock",
  "Buy ____ Puts",
  "Buy ____ Calls",
  "Buy OTM 1 DTE ____ Calls",
  "Costanza Method: Research ____, Come To A Conclusion, and Do The Opposite",
  // "Buy Gold",
  // "Liquidate Your 401k To Buy GameStop Shares",
  // "Buy Coinbase Shares Because Buying Crypto Is Complicated",
  // "Buy Whatever People On Reddit Say To Buy",
  // "Open a Buy Limit Order and Let Your Cat Walk Across Your Keyboard",
]

let cryptoTips = [
  "Mortgage Your Home For NFTs Of Cartoon Monkeys",
  "Buy Bitcoin Futures With 5x+ Leverage",
  "Ask For Your Inheritance Early and Buy Crypto With A Dog On It",
  "Buy Whatever People On Reddit Say To Buy", 
  "Buy Ethereum",
  "Buy an Ethereum Killer",
  "Buy Whatever Elon Musk Tweets About",
]

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      currentTip: "undefined",
    }
  }

  handleClick = (value) => {
    value === "favorite" ? this.addFavorite() : this.randomTip(value)
  }

  addFavorite = () => {
    console.log("hey")
  }

  randomTip = (inspirationType) => {
    let bothChoice = stockTips.concat(cryptoTips)
    if (inspirationType === "stock") {
      this.setState( {currentTip: stockTips[Math.floor(Math.random() * stockTips.length)]} )
    } else if (inspirationType === "crypto") {
      this.setState( {currentTip: cryptoTips[Math.floor(Math.random() * cryptoTips.length)]} )
    } else {
      this.setState( {currentTip: bothChoice[Math.floor(Math.random() * bothChoice.length)]} )
    }
  }

  render() {
    return(
    <div className="home-container">
      <section className="welcome-message">
        <div className="welcome-message-header">
          Welcome to the NOT FINANCIAL ADVICE MAGIC 8 BALL! 
        </div>
        <div className="welcome-message-body">
          This tool is an excellent way find out about different investment strategies or new topics to research. None of it’s recommendations should be taken as financial advice. May the odds be ever in your favor.
        </div>
      </section>
      <section className="eight-ball-container">
        <div className="ball">
          { this.state.currentTip === "undefined" ? (
              <div className="eight">
                8
              </div>
          ) : (
              <div className="window ">
                <div className="eight-ball-message">
                  {this.state.currentTip}
                  <button className="favorite-button" value="favorite" onClick={event => this.handleClick(event.target.value)}>Favorite</button>
                </div>
              </div>
            )
          }
        </div>
      </section>
      <section className="advice-type-container">
        {this.state.currentTip === "undefined" ? <p>Pick Your Investment Inspiration Type:</p> : <p>Click Again To Receive Another Inspirational Investment Idea:</p>}
        <div className="advice-type-button-container">
          <button className="advice-type-button" value="stock" onClick={event => this.handleClick(event.target.value)}>Stocks</button>
          <button className="advice-type-button" value="both" onClick={event => this.handleClick(event.target.value)}>Both</button>
          <button className="advice-type-button" value="crypto" onClick={event => this.handleClick(event.target.value)}>Crypto</button>
        </div>
      </section>
    </div>
    )
  }
}

export default HomeView