import React from 'react';
import { Link } from 'react-router';

const Homepage = props => {

  return(
    <div>
      <Link to={`/second_homepage`}>
        <h1 className = "homepage-title">Patricia De Andres</h1>
        <p className="painter-and-illustrator">Painter & Illustrator</p>
        <img className="homepage-image" src="https://s3.amazonaws.com/patri-website/homepage_image.png" />
      </Link>
    </div>
  )
}

export default Homepage;
