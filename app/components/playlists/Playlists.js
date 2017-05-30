/**
 * Created by avishay on 28-Mar-17.
 */
import './playlists.scss';
import React from 'react';

import Playlist from '../playlist/Playlist';
import {connect} from 'react-redux';
import Sidebar from "../sidebar/Sidebar";

class Playlists extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.playlistId !== nextProps.playlistId) {
      this.refs[nextProps.playlistId].scrollIntoView({block: 'start', behavior: 'smooth'})
    }
  }

  returningNewPlaylist(playlist, index) {
    return (
      <div className="playlist-area" key={playlist.id} ref={'scroll' + playlist.id}>
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
        <div className="main-playlists">
          {this.props.playlists.map((playlist, index) => this.returningNewPlaylist(playlist, index))}
        </div>
      </div>
    );
  };
}

function mapStateToProps(stateData) {
  return {
    playlists: stateData.playlists,
    playlistId: stateData.scrollReducer
  }
}


export default connect(mapStateToProps)(Playlists);
