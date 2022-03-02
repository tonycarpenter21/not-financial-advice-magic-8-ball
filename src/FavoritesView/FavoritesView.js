import './FavoritesView.css'
import RemoveButton from '../x.svg'

const FavoritesView = () => {
  return(
    <div className="favorites-view">
      <div className="favorites-message title">
        Here is a collection of all of your saved investment ideas:
      </div>
      <div className="favorites-container">
        <div className="favorite-card">
          <div className="remove-idea-button-container">
            <img src={RemoveButton} alt="Remove Idea button" className="remove-idea-button" />
          </div>
          <div className="title">
            IDEA 1:
          </div>
          <div className="description">
            Buy Some Shares of AAPL
          </div>
        </div>
        <div className="favorite-card">
          <div className="remove-idea-button-container">
            <img src={RemoveButton} alt="Remove Idea button" className="remove-idea-button" />
          </div>
          <div className="title">
            IDEA 1:
          </div>
          <div className="description">
            Buy Some Shares of AAPL
          </div>
        </div>
        <div className="favorite-card">
          <div className="remove-idea-button-container">
            <img src={RemoveButton} alt="Remove Idea button" className="remove-idea-button" />
          </div>
          <div className="title">
            IDEA 1:
          </div>
          <div className="description">
            Buy Some Shares of AAPL
          </div>
        </div>
        <div className="favorite-card">
          <div className="remove-idea-button-container">
            <img src={RemoveButton} alt="Remove Idea button" className="remove-idea-button" />
          </div>
          <div className="title">
            IDEA 1:
          </div>
          <div className="description">
            Buy Some Shares of AAPL
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavoritesView