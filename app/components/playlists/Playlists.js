/**
 * Created by avishay on 28-Mar-17.
 */
import './playlists.scss';
import React from 'react';

import Playlist from '../playlist/Playlist';
import {connect} from 'react-redux';
import Sidebar from "../sidebar/Sidebar";

class Playlists extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  returningNewPlaylist(playlist, index) {
    return (
      <div className="playlist-area" key={playlist.id}>
        <Playlist
          playlist={playlist}
          index={index}
        />
      </div>
    );
  }

  render() {

    return (
      <div className="playlist-area playlists">
        <Sidebar/>
        <div className="main-playlist">
          {this.props.playlists.map((playlist, index) => this.returningNewPlaylist(playlist, index))}
        </div>
      </div>
    );
  };
}

function mapStateToProps(stateData) {
  return {
    playlists: stateData.playlists
  }
}
export default connect(mapStateToProps)(Playlists);
