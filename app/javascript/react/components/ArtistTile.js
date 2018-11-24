import React from 'react';

const ArtistTile = props => {

  return(
    <div>
      <h1 className="artist-name"> {props.name}</h1>
      <img className="artist-image" src={props.picture} />
      <p className="artist-bio"> {props.biography}</p>
    </div>
  )
}

export default ArtistTile;
