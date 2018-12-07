import React from 'react';

const PaintingTile = props => {

  return(
    <div>
      <div className="large-12 medium-12 small-12 column">
        <div className="large-6 medium-6 small-12 column">
          <img className="show-page-image" src={props.picture} />
        </div>
        <div className="large-6 medium-6 small-12 column">
          <h1 className="showpage-text showpage-image-titles">{props.title}</h1>
          <h1 className="showpage-text description-text">{props.description}</h1>
        </div>
      </div>
    </div>
  )
}

export default PaintingTile;
