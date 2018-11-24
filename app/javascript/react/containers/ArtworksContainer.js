import React from 'react';

const ArtworksContainer = props => {

  return(
    <div>
      <div className="large-4 medium-4 small-12 column">
        <h1>Paintings</h1>
        <img className="painting-category" src="https://s3.amazonaws.com/patri-website/monet.jpg" />
      </div>
      <div className="large-4 medium-4 small-12 column">
        <h1>Drawings</h1>
        <img className="painting-category" src="https://s3.amazonaws.com/patri-website/cat.jpg" />
        <h1>The Artist</h1>
        <img className="artist-category" src="https://s3.amazonaws.com/patri-website/Patri.jpg" />
      </div>
      <div className="large-4 medium-4 small-12 column">
        <h1>Painted Bottles</h1>
        <img className="painting-category" src="https://s3.amazonaws.com/patri-website/birds.jpg" />
      </div>
    </div>
  )
}

export default ArtworksContainer;
