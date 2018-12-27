import React from 'react';

const ArtHistoryInspirationTile = props => {

  return(
    <div>
      <div className="large-4 medium-4 small-4 column">
        <img className="inspiration-page-image" src={props.picture} />
      </div>
    </div>
  )
}

export default ArtHistoryInspirationTile;
