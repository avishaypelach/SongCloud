/**
 * Created by avishay on 12-Apr-17.
 */

import React from 'react';

import './dropdown.scss';

import uuid from 'uuid';

export default class DropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  witchHeading() {
    let exploreDropdown = <div className="dropdown-headers">
      <span> Add new playlist </span>
      <br/>
      <a className="create-song-dropdown" href="#" onClick={() => this.createPlaylist}> <i
        className="fa fa-plus" aria-hidden="true"/> Create playlist </a>
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

  isSongOnPlaylist(playlist) {
    const temp = playlist.songs.find((song) => song.id === this.props.song.id);
    if (temp) {
      return (<input type="checkbox" name={playlist.name} value="" id={playlist.id} defaultChecked onChange={() => console.info('yepp')}/>);
    }
    else {
      return (
        <input type="checkbox" name={playlist.name} value="" id={playlist.id} onChange={() => console.info('yepp')}/>);
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
