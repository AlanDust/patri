import React, { Component } from 'react';
import BottleTile from '../components/BottleTile'

class BottlesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bottleList: [],
      error: "",
    }
  }

  componentDidMount() {
    fetch(`/api/v1/artists/1/bottles`)
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
        bottleList: response.artwork
      })
    })
    .catch(error => console.error('Error:', error));
  }

  render() {

    let bottleTiles = this.state.bottleList.map(bottle => {
      return(
        <BottleTile
          key={bottle.id}
          id={bottle.id}
          title={bottle.title}
          picture={bottle.picture}
          description={bottle.description}
        />
      )
    })

    return(
      <div>
        <div className="show-page-quote">
          <p> "I spend much more time looking at Art History and at different references to Art than I do at actual objects."</p>
          <p> ~Jeff Koons</p>
        </div>
        <div className="large-12 medium-12 small-12 column">
          {bottleTiles}
        </div>
      </div>
    )
  }
}

export default BottlesContainer;
