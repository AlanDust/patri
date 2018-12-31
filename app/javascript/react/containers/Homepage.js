import React from 'react';
import { Link } from 'react-router';

const Homepage = props => {

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
              <Link to={'/artists/1'} className="navbar-link">About</Link>
              <Link to={'/artists/1/animals'} className="navbar-link">Animals</Link>
              <Link to={'/artists/1/projects'} className="navbar-link">Projects</Link>
              <Link to={'/artists/1/portraits'} className="navbar-link">Portraits</Link>
              <Link to={'/artists/1/music_inspirations'} className="navbar-link" className="right-most-link">Inspirations</Link>
            </div>
          </ul>
        </div>
      )
    }
  });

  return(
    <div>
      <div className="large-12 medium-12 small-12 column nav-bar">
        <NavBar />
      </div>
      <Link to={`/second_homepage`}>
        <img className="homepage-image" src="https://s3.amazonaws.com/patri-website/homepage_image.png" />
      </Link>
    </div>
  )
}

export default Homepage;
