import React, { Component } from 'react';
import ArtistTile from '../components/ArtistTile'
import CategoriesContainer from './CategoriesContainer'

class ArtistsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return(
      <div>
        <div className="large-6 medium-6 small-12 column">
          <h1>Hola from the Artist Tile</h1>
          <ArtistTile
          />
        </div>
        <div className="large-6 medium-6 small-12 column">
          <h1>Hola from the Categories Container</h1>
          <CategoriesContainer
          />
        </div>
      </div>
    )
  }
}

export default ArtistsContainer;
