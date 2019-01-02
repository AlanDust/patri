import React, { Component } from 'react';
import MusicInspirationTile from '../components/MusicInspirationTile'
import CatInspirationTile from '../components/CatInspirationTile'
import NatureInspirationTile from '../components/NatureInspirationTile'
import ArtHistoryInspirationTile from '../components/ArtHistoryInspirationTile'
import { Link } from 'react-router';

class InspirationsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicInspirationList: [],
      catInspirationList: [],
      natureInspirationList: [],
      artHistoryInspirationList: [],
      error: "",
    }
  }

  componentDidMount() {
    fetch(`/api/v1/artists/1/music_inspirations`)
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
      this.setState({ musicInspirationList: response.artwork })
      return fetch(`/api/v1/artists/1/cat_inspirations`)
    })
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
      this.setState({ catInspirationList: response.artwork })
      return fetch(`/api/v1/artists/1/nature_inspirations`)
    })
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
      this.setState({ natureInspirationList: response.artwork })
      return fetch(`/api/v1/artists/1/art_history_inspirations`)
    })
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
      this.setState({ artHistoryInspirationList: response.artwork })
    })
    .catch(error => console.error('Error:', error));
  }

  render() {

    let musicInspirationTiles = this.state.musicInspirationList.map(musicInspiration => {
      return(
        <MusicInspirationTile
          key={musicInspiration.id}
          id={musicInspiration.id}
          picture={musicInspiration.picture}
        />
      )
    })
    let catInspirationTiles = this.state.catInspirationList.map(catInspiration => {
      return(
        <CatInspirationTile
          key={catInspiration.id}
          id={catInspiration.id}
          picture={catInspiration.picture}
        />
      )
    })

    let natureInspirationTiles = this.state.natureInspirationList.map(natureInspiration => {
      return(
        <NatureInspirationTile
          key={natureInspiration.id}
          id={natureInspiration.id}
          picture={natureInspiration.picture}
        />
      )
    })

    let artHistoryInspirationTiles = this.state.artHistoryInspirationList.map(artHistoryInspiration => {
      return(
        <ArtHistoryInspirationTile
          key={artHistoryInspiration.id}
          id={artHistoryInspiration.id}
          picture={artHistoryInspiration.picture}
        />
      )
    })

    return(
      <div>
        <div className="large-12 medium-12 small-12 column nav-bar">
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
        <div className="large-12 medium-12 small-12 column top-inspirations">
          <h1 className="inspirations-header">Inspirations</h1>
          <div className="large-6 medium-6 small-6 column">
            <div className="large-6 medium-6 small-6 column">
              <div className="inspiration-quotes">
                <p> "When Hari puts the flute to his lips; The still are moved and the moving stilled; Winds die, the river Yamuna stops, crows fall silent and the deer fall senseless; Bird and beast are stunned by his splendour. A cow, unmoving, dangles a grassblade from her teeth. Even the wise can no longerhold firm their own minds."</p>
                <p> ~Sur Das</p>
              </div>
            </div>
            <div className="large-6 medium-6 small-6 column">
              <div>
                {musicInspirationTiles}
              </div>
            </div>
          </div>

          <div className="large-6 medium-6 small-6 column">
            <div className="large-6 medium-6 small-6 column">
              <div className="inspiration-quotes">
                <p> "I believe cats to be spirits come to earth. A cat, I am sure, could walk on a cloud without coming through."</p>
                <p> ~Jules Verne</p>
              </div>
            </div>
            <div className="large-6 medium-6 small-6 column">
              <div>
                {catInspirationTiles}
              </div>
            </div>
          </div>

          <div className="large-12 medium-12 small-12 column">
            <div className="large-6 medium-6 small-6 column">
              <div className="large-6 medium-6 small-6 column">
                <div>
                  {natureInspirationTiles}
                </div>
              </div>
              <div className="large-6 medium-6 small-6 column">
                <div className="inspiration-quotes">
                  <p> "The tree which moves some to tears of joy is in the eyes of others only a green thing that stands in the way. Some see nature all ridicule and deformity... and some scarce see nature at all. But to the eyes of the man of imagination, nature is imagination itself." </p>
                  <p> ~William Blake</p>
                </div>
              </div>
            </div>

            <div className="large-6 medium-6 small-6 column">
              <div className="large-6 medium-6 small-6 column">
                <div>
                  {artHistoryInspirationTiles}
                </div>
              </div>
              <div className="large-6 medium-6 small-6 column">
                <div className="inspiration-quotes">
                  <p> "I spend much more time looking at Art History and at different references to Art than I do at actual objects."</p>
                  <p> ~Jeff Koons </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default InspirationsContainer;
