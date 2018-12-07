import React from 'react';

const ArtistTile = props => {

  return(
    <div>
      <h1 className="artist-name"> {props.name}</h1>
      <h3 className="artist-title">Painter & Illustrator</h3>
      <div className="large-6 medium-6 small-12 column">
        <img className="artist-image" src={props.picture} />
      </div>
      <div className="large-6 medium-6 small-12 column">
        <p className="artist-quote"> "In all things of nature there is something of the marvelous" </p>
        <p className ="artist-quote"> ~Aristotle, Parts of Animals. </p>
        <p className="artist-bio"> {props.biography}</p>
      </div>
    </div>
  )
}

export default ArtistTile;
