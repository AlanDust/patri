import React from 'react';

const AnimalTile = props => {

  return(
    <div>
      <div className="large-4 medium-4 small-4 column">
        <h1 className="showpage-text showpage-image-titles">{props.title}</h1>

        <div className="large-12 medium-12 small-12 column">
          <img className="show-page-image" src={props.picture} />
          <h1 className="showpage-text description-text">{props.description}</h1>
        </div>
      </div>
    </div>
  )
}

export default AnimalTile;
