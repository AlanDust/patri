import React from 'react';

const NatureInspirationTile = props => {

  return(
    <div>
      <div className="large-6 medium-6 small-6 column">
        <img className="show-page-image" src={props.picture} />
      </div>
    </div>
  )
}

export default NatureInspirationTile;
