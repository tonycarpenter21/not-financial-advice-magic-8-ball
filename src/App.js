import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navigation from './Navigation/Navigation'
import HomeView from './HomeView/HomeView'
import FavoritesView from './FavoritesView/FavoritesView';
import PageNotFound from './PageNotFound/PageNotFound';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// // const pickedStocks = async () => {
// //   return 
// fetch("https://yh-finance.p.rapidapi.com/stock/v2/get-recommendations?symbol=INTC", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "yh-finance.p.rapidapi.com",
// 		"x-rapidapi-key": "cd502dacebmshf0d4843a45c1645p12e898jsnd6e52b28cf26"
// 	}
//   })
//   .then(response => response.json().then((data) => console.log(data.finance.result[0])))
//   .catch(err => {
//     console.error(err);
//   })
// // }

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/favorites" component={FavoritesView} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
