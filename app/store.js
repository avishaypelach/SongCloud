import { createStore, combineReducers } from 'redux';

import playlists from './reducers/playlistsReducer';
import currentTrack from './reducers/current-track';
import exploreReducer from './reducers/exploreReducer';

const reducer = combineReducers({
  playlists,
  currentTrack,
  exploreReducer

});

const store = createStore(reducer);

export default store;
