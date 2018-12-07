import React, { Component } from 'react';
import AnimalTile from '../components/AnimalTile'

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
        <div className="show-page-quote">
          <p> "A poet knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away. Details make perfection, and perfection is not a detail."</p>
          <p> ~Leonardo Da Vinci</p>
        </div>
        <div className="large-12 medium-12 small-12 column">
          {animalTiles}
        </div>
      </div>
    )
  }
}

export default AnimalsContainer;
