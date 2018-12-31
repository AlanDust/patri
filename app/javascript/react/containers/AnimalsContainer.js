import React, { Component } from 'react';
import AnimalTile from '../components/AnimalTile'
import { Link } from 'react-router';

class AnimalsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animalList: [],
      error: "",
    }
  }

  componentDidMount() {
    fetch(`/api/v1/artists/1/animals`)
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
        animalList: response.categories
      })
    })
    .catch(error => console.error('Error:', error));
  }

  render() {
    let animalTiles = this.state.animalList.map(animal => {
      return(
        <AnimalTile
          key={animal.id}
          id={animal.id}
          title={animal.title}
          picture={animal.picture}
          description={animal.description}
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
        <div className="show-page-quote">
          <p> "A poet knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away. Details make perfection, and perfection is not a detail."</p>
          <p> ~Leonardo Da Vinci</p>
        </div>
        <div className="large-12 medium-12 small-12 column">
          <div className="large-6 medium-6 small-6 column">
            <p className="showpage-main-image-title"> Nemo </p>
            <img className="showpage-main-image" src="https://s3.amazonaws.com/patri-website/cat.jpg" />
            <p className="showpage-main-image-description">Watercolor Pencils and Oil</p>
          </div>
          <div className="large-6 medium-6 small-6 column">
            {animalTiles}
          </div>
        </div>
      </div>
    )
  }
}

export default AnimalsContainer;
