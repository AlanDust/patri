import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ArtistsContainer from './ArtistsContainer';
import ArtworksContainer from './ArtworksContainer';
import ProjectsContainer from './ProjectsContainer';
import AnimalsContainer from './AnimalsContainer';
import PortraitsContainer from './PortraitsContainer';
import InspirationsContainer from './InspirationsContainer';
import Homepage from './Homepage';


const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Homepage} />
      <Route path='/artists/:id'>
        <IndexRoute component={ArtistsContainer} />
        <Route path='/artists/:artist_id/projects' component={ProjectsContainer} />
        <Route path='/artists/:artist_id/animals' component={AnimalsContainer} />
        <Route path='/artists/:artist_id/portraits' component={PortraitsContainer} />
        <Route path='/artists/:artist_id/music_inspirations' component={InspirationsContainer} />
        <Route path='/artists/:artist_id/cat_inspirations' component={InspirationsContainer} />
        <Route path='/artists/:artist_id/nature_inspirations' component={InspirationsContainer} />
        <Route path='/artists/:artist_id/art_history_inspirations' component={InspirationsContainer} />
      </Route>
    </Router>
  )
}

export default App
