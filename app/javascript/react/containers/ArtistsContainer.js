import React, { Component } from 'react';
import ArtistTile from '../components/ArtistTile'

class ArtistsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistList: [],
      error: "",
    }
  }

  render() {

    let artistTiles = this.state.artistList.map(artist => {
      return(
        <ArtistTile
          key={artist.id}
          id={artist.id}
          name={artist.name}
          picture={artist.picture}
          biography={artist.biography}
        />
      )
    })

    return(
      <div>
        <div className="large-12 medium-12 small-12 column">
          {artistTiles}
        </div>
      </div>
    )
  }
}

export default ArtistsContainer;
