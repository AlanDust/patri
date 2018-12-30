import React from 'react';
import { Link } from 'react-router';

const Homepage = props => {

  let NavBar = React.createClass({
    render() {
      return (
        <div>
          <ul>
            <Link to={'/'}>Home </Link>
            <Link to={'/artists/1/animals'}>Animals </Link>
            <Link to={'/artists/1/projects'}>Projects </Link>
            <Link to={'/artists/1/portraits'}>Portraits </Link>
            <Link to={'/artists/1/music_inspirations'}>Inspirations </Link>
            <Link to={'/artists/1'}>About </Link>
          </ul>
        </div>
      )
    }
  });

  return(
    <div>
      <NavBar />
      <Link to={`/second_homepage`}>
        <h1 className = "homepage-title">Patricia De Andres</h1>
        <p className="painter-and-illustrator">Painter & Illustrator</p>
        <img className="homepage-image" src="https://s3.amazonaws.com/patri-website/homepage_image.png" />
      </Link>
    </div>
  )
}

export default Homepage;
