import React from 'react';
import { Link } from 'react-router';

const ArtworksContainer = props => {

  return(
    <div>
      <div className="large-4 medium-4 small-12 column">
        <h1>Paintings</h1>
        <Link to={"/artists/1/paintings"}>
          <img className="painting-category" src="https://s3.amazonaws.com/patri-website/monet.jpg" />
        </Link>
      </div>
      <div className="large-4 medium-4 small-12 column">
        <h1>Drawings</h1>
        <Link to={"/artists/1/drawings"}>
          <img className="painting-category" src="https://s3.amazonaws.com/patri-website/cat.jpg" />
        </Link>
        <h1>The Artist</h1>
        <Link to={"/artists/1"}>
          <img className="artist-category" src="https://s3.amazonaws.com/patri-website/Patri.jpg" />
        </Link>
      </div>
      <div className="large-4 medium-4 small-12 column">
        <h1>Painted Bottles</h1>
        <Link to={"/artists/1/bottles"}>
          <img className="painting-category" src="https://s3.amazonaws.com/patri-website/birds.jpg" />
        </Link>
      </div>
    </div>
  )
}

export default ArtworksContainer;
