import React from 'react'
import './FavoritesView.css'
import RemoveButton from '../x.svg'
import FavoriteCard from '../FavoriteCard/FavoriteCard'

const FavoritesView = ({favorites}) => {
  console.log(favorites)
  const favoriteCards = favorites.map((favorite, index) => {
    return(
     <FavoriteCard tip={favorite.tip} number={index} />
    )
  })
  return(
    <div className="favorites-view">
      <div className="favorites-message title">
        Here is a collection of all of your saved investment ideas:
      </div>
      <div className="favorites-container">
        {favoriteCards}
      </div>
    </div>
  )
}

export default FavoritesView