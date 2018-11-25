import React, { Component } from 'react';
import PaintingTile from '../components/PaintingTile'

class PaintingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paintingList: [],
      error: "",
    }
  }

  componentDidMount() {
    fetch(`/api/v1/artists/1/paintings`)
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
        paintingList: response.artwork
      })
    })
    .catch(error => console.error('Error:', error));
  }

  render() {

    let paintingTiles = this.state.paintingList.map(painting => {
      return(
        <PaintingTile
          key={painting.id}
          id={painting.id}
          title={painting.title}
          picture={painting.picture}
          description={painting.description}
        />
      )
    })

    return(
      <div>
        <div className="large-12 medium-12 small-12 column">
          {paintingTiles}
        </div>
      </div>
    )
  }
}

export default PaintingsContainer;
