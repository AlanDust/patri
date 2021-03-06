import React from 'react';

const MusicInspirationTile = props => {

  return(
    <div>
      <div className="large-4 medium-6 small-12 column">
        <img className="inspiration-page-image" src={props.picture} />
      </div>
    </div>
  )
}

export default MusicInspirationTile;
