import React from 'react'
import './FavoritesView.css'
import FavoriteCard from '../FavoriteCard/FavoriteCard'

const FavoritesView = ({favorites, removeFavorite}) => {
  const favoriteCards = favorites.map((favorite, index) => {
    return(
     <FavoriteCard tip={favorite.tip} id={favorite.id} number={index} removeFavorite={removeFavorite} />
    )
  })
  const favoriteResults = favorites.length === 0 ? <p className="no-saved-favorites">You currently have no saved investment tips.</p> : favoriteCards
  return(
    <div className="favorites-view">
      <div className="favorites-message title">
        Here is a collection of all of your saved investment ideas:
      </div>
      <div className="favorites-container">
        {favoriteResults}
      </div>
    </div>
  )
}

export default FavoritesView