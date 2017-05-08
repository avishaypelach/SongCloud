/**
 * Created by avishay on 16-Apr-17.
 */
import store from '../store'

export default function exploreReducer (store=[], action) {
  if (action.type === 'ADD_SONGS'){
    store.songs = action.songs;
  }

  return store;
}

export function GetXhr() {

    const xhr = new XMLHttpRequest();

    const genre = this.props.match.params.genre;
    const offset = this.state.offset;
    const limit = this.state.limit;


    xhr.open('GET', `https://api.soundcloud.com/tracks?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z&limit=${limit}&offset=${offset}&tags=${genre}`);

    xhr.addEventListener('load', () => {
      this.setState({songs: JSON.parse(xhr.responseText), songsLoading: 'loaded'});
    });

    xhr.addEventListener('error', () => {
      this.setState({songsLoading: 'error'});
    });
    xhr.send();
  }
