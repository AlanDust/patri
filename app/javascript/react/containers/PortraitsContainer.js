import React, { Component } from 'react';
import PortraitTile from '../components/PortraitTile'

class PortraitsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portraitList: [],
      error: "",
    }
  }

  componentDidMount() {
    fetch(`/api/v1/artists/1/portraits`)
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
        portraitList: response.artwork
      })
    })
    .catch(error => console.error('Error:', error));
  }

  render() {

    let portraitTiles = this.state.portraitList.map(portrait => {
      return(
        <PortraitTile
          key={portrait.id}
          id={portrait.id}
          title={portrait.title}
          picture={portrait.picture}
          description={portrait.description}
        />
      )
    })

    return(
      <div>
        <div className="show-page-quote">
          <p> "Every portrait that is painted with feeling is a portrait of the artist, not of the sitter. The sitter is merely the accident, the occasion. It is not he who is revealed by the painter; it is rather the painter who, on the coloured canvas, reveals himself."</p>
          <p> ~Oscar Wilde, The Picture of Dorian Gray</p>
        </div>
        <div className="large-12 medium-12 small-12 column">
          <div className="large-6 medium-6 small-6 column">
            <p className="showpage-main-image-title">Lorena and Patricia</p>
            <img className="showpage-main-image" src="https://s3.amazonaws.com/patri-website/patri_and_lorena.jpg" />
            <p className="showpage-main-image-description">Watercolor Pencils</p>
          </div>
          <div className="large-6 medium-6 small-6 column">
            {portraitTiles}
          </div>
        </div>
      </div>
    )
  }
}

export default PortraitsContainer;
