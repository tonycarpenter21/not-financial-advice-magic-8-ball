import fetchedStocks from './apiCalls'

let stocks = []

fetchedStocks().then(symbol => stocks.push(symbol.quotes))

let stockTips = [
  "Buy Some Shares of _ Stock",
  "Buy _ Puts",
  "Buy _ Calls",
  "Buy OTM 1 DTE _ Calls",
  "Costanza Method: Research _, Decide on Puts or Calls, and Buy The Opposite",
  "Buy Gold",
  "Liquidate Your 401k To Buy GameStop Shares",
  "Buy Coinbase Shares Because Buying Crypto Is Complicated",
  "Buy Whatever People On Reddit Say To Buy",
  "Open a Buy Limit Order and Let Your Cat Walk Across Your Keyboard",
]

let cryptoTips = [
  "Mortgage Your Home To Buy NFTs Of Cartoon Monkeys",
  "Buy Bitcoin Futures With 5x+ Leverage",
  "Ask For Your Inheritance Early and Buy Crypto With A Dog On It",
  "Buy Whatever People On Reddit Say To Buy", 
  "Buy Ethereum",
  "Buy an Ethereum Killer",
  "Buy Whatever Elon Musk Tweets About",
]

export {stocks, stockTips, cryptoTips}