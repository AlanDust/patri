import React, { Component } from 'react';
import DrawingTile from '../components/DrawingTile'

class DrawingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawingList: [],
      error: "",
    }
  }

  componentDidMount() {
    fetch(`/api/v1/artists/1/drawings`)
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
        drawingList: response.categories
      })
    })
    .catch(error => console.error('Error:', error));
  }

  render() {
    let drawingTiles = this.state.drawingList.map(drawing => {
      return(
        <DrawingTile
          key={drawing.id}
          id={drawing.id}
          title={drawing.title}
          picture={drawing.picture}
          description={drawing.description}
        />
      )
    })

    return(
      <div>
        <div className="show-page-quote">
          <p> "Every portrait that is painted with feeling is a portrait of the artist, not of the sitter. The sitter is merely the accident, the occasion. It is not he who is revealed by the painter; it is rather the painter who, on the coloured canvas, reveals himself."</p>
          <p> Oscar Wilde, The Picture of Dorian Gray</p>
        </div>
        <div className="large-12 medium-12 small-12 column">
          {drawingTiles}
        </div>
      </div>
    )
  }
}

export default DrawingsContainer;
