import React from 'react';
import { Link } from 'react-router';

const HomepageArtistComponent = props => {

  let NavBar = React.createClass({
    render() {
      return (
        <div>
          <ul>
            <div className="large-4 medium-4 small-4 column left-name">
              <p className="navbar-name">Patricia De Andrés </p>
              <span className="navbar-description">Painter & Illustrator</span>
            </div>
            <div className="large-7 medium-7 small-7 column right-links">
              <Link to={'/'} className="navbar-link">Home </Link>
              <Link to={'/artists/1/animals'} className="navbar-link">Animals</Link>
              <Link to={'/artists/1/projects'} className="navbar-link">Projects</Link>
              <Link to={'/artists/1/portraits'} className="navbar-link">Portraits</Link>
              <Link to={'/artists/1/music_inspirations'} className="navbar-link">Inspirations</Link>
              <Link to={'/artists/1'} className="navbar-link" className="right-most-link">About</Link>
            </div>
          </ul>
        </div>
      )
    }
  });

  return(
    <div>
      <NavBar />
      <div className="large-4 medium-4 small-12 column">
        <h1 className="homepage-headers">Projects</h1>
        <Link to={`/artists/${props.id}/projects`}>
          <img className="homepage-image" className="category" src="https://s3.amazonaws.com/patri-website/monet.jpg" />
        </Link>
      </div>
      <div className="large-4 medium-4 small-12 column">
        <h1 className="homepage-headers">Animals</h1>
        <Link to={`/artists/${props.id}/animals`}>
          <img className="homepage-image" className="category" src="https://s3.amazonaws.com/patri-website/cat.jpg" />
        </Link>
        <h1 className="homepage-headers the-artist">The Artist</h1>
        <Link to={`/artists/${props.id}`}>
          <img className="homepage-image" className="category" src="https://s3.amazonaws.com/patri-website/Patri.jpg" />
        </Link>
      </div>
      <div className="large-4 medium-4 small-12 column">
        <h1 className="homepage-headers">Portraits</h1>
        <Link to={`/artists/${props.id}/portraits`}>
          <img className="homepage-image" className="category" src="https://s3.amazonaws.com/patri-website/patri_and_lorena.jpg" />
        </Link>
        <Link to={`/artists/${props.id}/music_inspirations`}>
          <h1 className="homepage-headers inspiration">Inspiration</h1>
        </Link>
      </div>
    </div>
  )
}

export default HomepageArtistComponent;
