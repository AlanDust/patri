import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ArtistsContainer from './ArtistsContainer';
import ArtworksContainer from './ArtworksContainer';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={ArtworksContainer} />
    </Router>
  )
}

export default App
