import './HomeView.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {stocks, stockTips, cryptoTips} from '../tips'

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      currentTip: "undefined",
    }
  }

  handleClick = (event) => {
    event.target.name === "favorite" ? this.handleAddFavorite(event) : this.randomTip(event.target.name)
  }

  handleAddFavorite = (event) => {
    const newFavorite = {
      id: Date.now(),
      tip: this.state.currentTip
    }
    this.props.addFavorite(newFavorite)
  }

  randomTip = (inspirationType) => {
    let bothChoice = stockTips.concat(cryptoTips)
    console.log(stocks)
    if (inspirationType === "stock") {
      let selectedStockTip = stockTips[Math.floor(Math.random() * stockTips.length)]
      let selectedStock = stocks[Math.floor(Math.random() * stocks.length)]
      let splitStockTip = selectedStockTip.split('_')
      splitStockTip.splice(1, 0, selectedStock)
      let finalStockTip = splitStockTip.join('')
      this.setState( {currentTip: finalStockTip} )
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
          This tool is an excellent way find out about different investment strategies or new topics to research. None of it’s recommendations should be taken as financial advice.
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
                  <Link to="/favorites">
                    <button className="favorite-button" name="favorite" onClick={event => this.handleClick(event)}>Favorite</button>
                  </Link>
                </div>
              </div>
            )
          }
        </div>
      </section>
      <section className="advice-type-container">
        {this.state.currentTip === "undefined" ? <p>Pick Your Investment Inspiration Type:</p> : <p>Click Again To Generate Another Idea:</p>}
        <div className="advice-type-button-container">
          <button className="advice-type-button" name="stock" onClick={event => this.handleClick(event)}>Stocks</button>
          <button className="advice-type-button" name="both" onClick={event => this.handleClick(event)}>Both</button>
          <button className="advice-type-button" name="crypto" onClick={event => this.handleClick(event)}>Crypto</button>
        </div>
      </section>
    </div>
    )
  }
}

export default HomeView