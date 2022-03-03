// import react from React
import RemoveButton from '../x.svg'
import './FavoriteCard.css'

const FavoriteCard = ({tip, number}) => {
  return(
    <div className="favorite-card">
      <div className="remove-idea-button-container">
        <img src={RemoveButton} alt="Remove Idea button" className="remove-idea-button" />
      </div>
      <div className="title">
        IDEA {number + 1}:
      </div>
      <div className="description">
        {tip}
      </div>
    </div>
  )
}

export default FavoriteCard