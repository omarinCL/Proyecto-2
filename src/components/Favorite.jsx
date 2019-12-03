import React from 'react'
import './Favorite.scss'
import PropTypes from 'prop-types'

const Favorite = props => {
  return (
    <>
      {props.isFavorite && (
        <span onClick={props.onRemoveFavorite} alt='Quitar de mis favoritos'>
          <i className='fas fa-star favorite' />
        </span>
      )}
      {!props.isFavorite && (
        <span onClick={props.onAddFavorite} alt='Agregar a favoritos'>
          <i className='far fa-star unfavorite' />
        </span>
      )}
    </>
  )
}

Favorite.propTypes = {
  onAddFavorite: PropTypes.func.isRequired,
  onRemoveFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool
}

export default Favorite
