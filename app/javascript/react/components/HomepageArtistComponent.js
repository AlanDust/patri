import React from 'react';
import { Link } from 'react-router';

const HomepageArtistComponent = props => {

  return(
    <div>
      <div className="large-4 medium-4 small-12 column">
        <h1 className="homepage-headers">Paintings</h1>
        <Link to={`/artists/${props.id}/paintings`}>
          <img className="homepage-image" className="category" src="https://s3.amazonaws.com/patri-website/monet.jpg" />
        </Link>
        <div className="home-page-quote">
          <p> "A poet knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away. Details make perfection, and perfection is not a detail"</p>
          <p> Leonardo Da Vinci</p>
        </div>
      </div>
      <div className="large-4 medium-4 small-12 column">
        <h1 className="homepage-headers">Drawings</h1>
        <Link to={`/artists/${props.id}/drawings`}>
          <img className="homepage-image" className="category" src="https://s3.amazonaws.com/patri-website/cat.jpg" />
        </Link>
        <h1 className="homepage-headers the-artist">The Artist</h1>
        <Link to={`/artists/${props.id}`}>
          <img className="homepage-image" className="category" src="https://s3.amazonaws.com/patri-website/Patri.jpg" />
        </Link>
      </div>
      <div className="large-4 medium-4 small-12 column">
        <h1 className="homepage-headers">Painted Bottles</h1>
        <Link to={`/artists/${props.id}/bottles`}>
          <img className="homepage-image" className="category" src="https://s3.amazonaws.com/patri-website/birds.jpg" />
        </Link>
      </div>
    </div>
  )
}

export default HomepageArtistComponent;
