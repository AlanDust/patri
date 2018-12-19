import React, { Component } from 'react';
import MusicInspirationTile from '../components/MusicInspirationTile'
import CatInspirationTile from '../components/CatInspirationTile'
import NatureInspirationTile from '../components/NatureInspirationTile'
import ArtHistoryInspirationTile from '../components/ArtHistoryInspirationTile'

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
        <div className="show-page-quote">
          <p> "Quote goes here."</p>
          <p> ~Author</p>
        </div>
        <div className="large-6 medium-6 small-12 column">
          {musicInspirationTiles}
        </div>
        <div className="large-6 medium-6 small-12 column">
          {catInspirationTiles}
        </div>
        <div className="large-6 medium-6 small-12 column">
          {natureInspirationTiles}
        </div>
        <div className="large-6 medium-6 small-12 column">
          {artHistoryInspirationTiles}
        </div>
      </div>
    )
  }
}


export default InspirationsContainer;
