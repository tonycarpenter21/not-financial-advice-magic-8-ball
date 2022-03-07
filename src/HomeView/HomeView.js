import './HomeView.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { stockTips, cryptoTips } from '../tips';
import fetchedStocks from '../apiCalls';

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      currentTip: null,
      stocks: []
    }
  }

  componentDidMount = () => {
    fetchedStocks()
      .then(symbol => this.setState( { stocks: [...symbol.quotes] } ))
      .catch(err => window.alert('SERVER ERROR: SERVER CANNOT BE REACHED OR API CALL LIMIT EXCEEDED!'))
  }

  handleClick = (event) => {
    event.target.name === "favorite" ? this.handleAddFavorite(event) : this.randomTip(event.target.name);
  }

  handleAddFavorite = (event) => {
    const newFavorite = {
      key: Date.now(),
      id: Date.now(),
      tip: this.state.currentTip
    }
    this.props.addFavorite(newFavorite);
  }

  createStockTip = () => {
    const selectedStockTip = stockTips[Math.floor(Math.random() * stockTips.length)];
    const selectedStock = this.state.stocks[Math.floor(Math.random() * this.state.stocks.length)].symbol;
    if (selectedStockTip.split('').includes('_') === true) {
      const splitStockTip = selectedStockTip.split('_');
      splitStockTip.splice(1, 0, selectedStock);
      const finalStockTip = splitStockTip.join('');
      return this.setState( {currentTip: finalStockTip} );
    } else {
      return this.setState( {currentTip: selectedStockTip} );
    }
  }

  createCryptoTip = () => {
    return this.setState( {currentTip: cryptoTips[Math.floor(Math.random() * cryptoTips.length)]} );
  }

  randomTip = (inspirationType) => {
    if (inspirationType === "stock") {
      this.createStockTip();
    } else if (inspirationType === "crypto") {
      this.createCryptoTip();
    } else {
      Math.random() > .5 ? this.createStockTip() : this.createCryptoTip();
    }
  }

  investmentTypeButtonMessage = () => {
    return this.state.currentTip === null ? <p>Pick Your Investment Inspiration Type:</p> : <p>Click Again To Generate Another Idea:</p>
  }

  eightBallRender = () => {
    if (this.state.currentTip === null) {
      return(
        <div className="eight">8</div>
      )
    } else {
      return(
        <div className="window">
          <div className="eight-ball-message">
            {this.state.currentTip}
            <Link to="/favorites">
              <button className="favorite-button" name="favorite" onClick={event => this.handleClick(event)}>Favorite</button>
            </Link>
          </div>
        </div>
      )
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
          {this.eightBallRender()}
        </div>
      </section>
      <section className="advice-type-container">
        {this.investmentTypeButtonMessage()}
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