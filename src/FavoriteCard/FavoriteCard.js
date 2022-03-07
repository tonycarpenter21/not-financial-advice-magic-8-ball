import RemoveButton from '../x.svg';
import './FavoriteCard.css';
import PropTypes from 'prop-types';

const FavoriteCard = ({tip, number, id, removeFavorite}) => {
  return(
    <div className="favorite-card">
      <div className="remove-idea-button-container">
        <img src={RemoveButton} alt="Remove Idea button" className="remove-idea-button" onClick={() => removeFavorite(id)}/>
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

FavoriteCard.propTypes = {
  tip: PropTypes.string, 
  number: PropTypes.number,
  id: PropTypes.number,
  removeFavorite: PropTypes.func.isRequired
};
