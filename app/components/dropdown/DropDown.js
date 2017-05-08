/**
 * Created by avishay on 12-Apr-17.
 */

import React from 'react';

import './dropdown.scss';

import uuid from 'uuid';

import {connect} from 'react-redux';

class DropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.createPlaylist = this.createPlaylist.bind(this);
  }

  witchHeading() {
    let exploreDropdown = <div className="dropdown-headers">
      <span> Add new playlist </span>
      <br/>
      <button className="create-song-dropdown" type="button" onClick={() => this.createPlaylist(this.props.song)}><i
        className="fa fa-plus" aria-hidden="true"/> Create playlist
      </button>
    </div>;

    let playlistDropdwon = <div className="dropdown-headers">
      <span> Edit playlist </span></div>;

    if (this.props.mode === 'explore') {
      return exploreDropdown;
    }
    else {
      return playlistDropdwon;
    }
  }

  createPlaylist(song) {
    const value = {
      id: uuid(),
      name: 'untitled',
      isFocusMode: true,
      songs: [song]
    };
    this.props.createNewPlaylistInStore(value);
    this.props.history.push('/playlists');
  }

  isSongOnPlaylist(playlist) {
    const temp = playlist.songs.find((song) => song.id === this.props.song.id);
    if (temp) {
      return (<input type="checkbox" name={playlist.name} value="" id={playlist.id} defaultChecked
                     onChange={() => this.props.removingSongFromPlaylist(playlist, this.props.song)}/>);
    }
    else {
      return (
        <input type="checkbox" name={playlist.name} value="" id={playlist.id} onChange={() => this.props.addingNewSong(playlist, this.props.song)}/>);
    }
  }

  createPlaylistCheckbox(playlist) {
    return (
      <li className="dropdown-playlists-list-li" key={uuid()}>
        <label htmlFor={playlist.id} className="checkbox">{playlist.name}
          {this.isSongOnPlaylist(playlist)}
          <span className="indicator"/>
        </label>
      </li>
    );
  }

  render() {
    return (
      <div className="song-dropdown">
        {this.witchHeading()}
        <div className="dropdown-playlists-list-area">
          <ul className="dropdown-playlists-list">
            {this.props.playlists.map((playlist) => this.createPlaylistCheckbox(playlist))}
          </ul>
        </div>
      </div>
    );
  }
}


function mapStateToProps(stateData) {
  return {
    playlists: stateData.playlists
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createNewPlaylistInStore(value){
      dispatch({
        type: 'CREATE_NEW',
        playlist: value
      });
    },
    addingNewSong(playlist,song){
      dispatch({
        type: 'ADD_SONG_TO_PLAYLIST',
        playlist: playlist,
        song: song
      })
    },
    removingSongFromPlaylist(playlist,song){
      dispatch({
        type: 'REMOVE_SONG_FROM_PLAYLIST',
        playlist: playlist,
        song: song
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
