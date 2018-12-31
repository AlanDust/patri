import React, { Component } from 'react';
import ArtistTile from '../components/ArtistTile'
import { Link } from 'react-router';

class ArtistsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistList: [],
      error: "",
    }
  }


  componentDidMount() {
    fetch(`/api/v1/artists`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        artistList: response
      })
    })
    .catch(error => console.error('Error:', error));
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
          <ul>
            <div className="large-4 medium-4 small-4 column left-name">
              <p className="navbar-name">Patricia De Andrés </p>
              <span className="navbar-description">Painter & Illustrator</span>
            </div>
            <div className="large-7 medium-7 small-7 column right-links">
              <Link to={'/'} className="navbar-link">Home </Link>
              <Link to={'/artists/1'} className="navbar-link">About</Link>
              <Link to={'/artists/1/animals'} className="navbar-link">Animals</Link>
              <Link to={'/artists/1/projects'} className="navbar-link">Projects</Link>
              <Link to={'/artists/1/portraits'} className="navbar-link">Portraits</Link>
              <Link to={'/artists/1/music_inspirations'} className="navbar-link" className="right-most-link">Inspirations</Link>
            </div>
          </ul>
        </div>
        <div className="large-12 medium-12 small-12 column">
          {artistTiles}
        </div>
      </div>
    )
  }
}

export default ArtistsContainer;
