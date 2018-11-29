import React from 'react';

const BottleTile = props => {

  return(
    <div>
      <div classname="large-12 medium-12 small-12 column">
        <h1 className="showpage-image-titles">{props.title}</h1>
        <div classname="large-12 medium-12 small-12 column">
          <div className="large-6 medium-6 small-12 column">
            <img className="show-page-image" src={props.picture} />
          </div>
          <div className="large-6 medium-6 small-12 column">
            <h1>{props.description}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottleTile;
