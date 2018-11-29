import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ArtistsContainer from './ArtistsContainer';
import ArtworksContainer from './ArtworksContainer';
import PaintingsContainer from './PaintingsContainer';
import DrawingsContainer from './DrawingsContainer';
import BottlesContainer from './BottlesContainer';
import HomepageArtistComponent from '../components/HomepageArtistComponent'


const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={ArtworksContainer} />
      <Route path='/artists/:id' >
        <IndexRoute component={HomepageArtistComponent} />
        <Route path='/artists/:artist_id/paintings' component={PaintingsContainer} />
        <Route path='/artists/:artist_id/drawings' component={DrawingsContainer} />
        <Route path='/artists/:artist_id/bottles' component={BottlesContainer} />
      </Route>
    </Router>
  )
}

export default App
