import React, { Component } from 'react';
import ProjectTile from '../components/ProjectTile'

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],
      error: "",
    }
  }

  componentDidMount() {
    fetch(`/api/v1/artists/1/projects`)
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
        projectList: response.artwork
      })
    })
    .catch(error => console.error('Error:', error));
  }

  render() {

    let projectTiles = this.state.projectList.map(project => {
      return(
        <ProjectTile
          key={project.id}
          id={project.id}
          title={project.title}
          picture={project.picture}
          description={project.description}
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
          <div className="large-6 medium-6 small-6 column">
            <p className="showpage-main-image-title">Copy of Monet's 'Garden at Vétheuil'</p>
            <img className="showpage-main-image" src="https://s3.amazonaws.com/patri-website/monet.jpg" />
            <p className="showpage-main-image-description">Acrylics</p>
          </div>
          <div className="large-6 medium-6 small-6 column">
            {projectTiles}
          </div>
        </div>
      </div>
    )
  }
}


export default ProjectsContainer;
