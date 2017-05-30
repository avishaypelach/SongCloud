import {createStore, combineReducers} from 'redux';

import playlists from './reducers/playlistsReducer';
import currentTrack from './reducers/currentTrack';
import exploreReducer from './reducers/exploreReducer';
import scrollReducer from './reducers/scrollReducer'

const reducer = combineReducers({
  playlists,
  currentTrack,
  exploreReducer,
  scrollReducer
});

const store = createStore(reducer);

export default store;
