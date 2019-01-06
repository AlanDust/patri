import React from 'react';

const NatureInspirationTile = props => {

  return(
    <div>
      <div className="large-6 medium-6 small-12 column">
        <img className="inspiration-page-image" src={props.picture} />
      </div>
    </div>
  )
}

export default NatureInspirationTile;
