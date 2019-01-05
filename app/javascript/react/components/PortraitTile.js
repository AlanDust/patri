import React from 'react';

const PortraitTile = props => {

  return(
    <div>
      <div className="large-2 medium-12 small-12 column animal-images">
        <h1 className="showpage-image-titles">{props.title}</h1>

        <div className="large-12 medium-12 small-12 column">
          <img className="individual-animal-image" src={props.picture} />
          <h2 className="showpage-text description-text">{props.description}</h2>
        </div>
      </div>
    </div>
  )
}

export default PortraitTile;
