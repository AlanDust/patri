import React from 'react';

const DrawingTile = props => {

  return(
    <div>
      <h1>{props.title}</h1>
      <div className="large-6 medium-6 small-12 column">
        <img className="show-page-image" src={props.picture} />
      </div>
      <div className="large-6 medium-6 small-12 column">
        <h1>{props.description}</h1>
      </div>
    </div>
  )
}

export default DrawingTile;
