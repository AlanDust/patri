import React from 'react';

const CatInspirationTile = props => {

  return(
    <div className="large-6 medium-6 small-12 column">
      <img className="cat-inspiration-page-image" src={props.picture} />
    </div>
  )
}

export default CatInspirationTile;
