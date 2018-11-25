import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ArtistsContainer from './ArtistsContainer';
import ArtworksContainer from './ArtworksContainer';
import PaintingsContainer from './PaintingsContainer';
import DrawingsContainer from './DrawingsContainer';
import BottlesContainer from './BottlesContainer';


const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={ArtworksContainer} />
      <Route path='/artists/1/paintings' >
        <IndexRoute component={PaintingsContainer} />
      </Route>
      <Route path='/artists/1/drawings' >
        <IndexRoute component={DrawingsContainer} />
      </Route>
      <Route path='/artists/1/bottles' >
        <IndexRoute component={BottlesContainer} />
      </Route>
      <Route path='/artists/1'>
        <IndexRoute component={ArtistsContainer} />
      </Route>
    </Router>
  )
}

export default App
