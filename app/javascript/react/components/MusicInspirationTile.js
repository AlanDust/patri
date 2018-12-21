import React from 'react';

const MusicInspirationTile = props => {

  return(
    <div>
      <div className="large-4 medium-4 small-6 column">
        <img className="show-page-image" src={props.picture} />
      </div>
    </div>
  )
}

export default MusicInspirationTile;
