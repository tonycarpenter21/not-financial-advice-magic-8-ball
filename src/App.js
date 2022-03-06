import './App.css';
import React, { Component } from 'react';
import Navigation from './Navigation/Navigation'
import HomeView from './HomeView/HomeView'
import FavoritesView from './FavoritesView/FavoritesView';
import PageNotFound from './PageNotFound/PageNotFound';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      favoriteTips: []
    }
  }

  addFavorite = (newFavorite) => {
    this.setState( {favoriteTips: [...this.state.favoriteTips, newFavorite]} )
  }

  removeFavorite = (id) => {
    const newTips = this.state.favoriteTips.filter(tip => tip.id !== id)
    this.setState( {favoriteTips: newTips })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <HomeView addFavorite={this.addFavorite} />
            </Route>
            <Route path="/favorites" >
              <FavoritesView favorites={this.state.favoriteTips} removeFavorite={this.removeFavorite}/>
            </Route>
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
