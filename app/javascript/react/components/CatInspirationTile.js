import React from 'react';

const CatInspirationTile = props => {

  return(
    <div className="large-6 medium-6 small-6 column">
      <img className="show-page-image" src={props.picture} />
    </div>
  )
}

export default CatInspirationTile;
