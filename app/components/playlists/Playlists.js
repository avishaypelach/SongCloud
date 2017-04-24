/**
 * Created by avishay on 28-Mar-17.
 */
import './playlists.scss';
import React from 'react';

import Playlist from '../playlist/Playlist';
import {connect} from 'react-redux';

class Playlists extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  returningNewPlaylist(playlist){
    return (
      <div className="playlist-area" key={playlist.id}>
        <Playlist
          playlist={playlist}/>
      </div>
    );
  }

  render() {

    return (
      <div className="playlist-area playlists">
        <div className="side-bar-playlist">
          <div className="adding-a-playlist-btn-area">
            <button className="adding-a-playlist-btn"> Add new playlist</button>
          </div>
          <div className="playlists-names-area">
            <ul className="playlists-names">
              <li> my playlist</li>
              <li> my playlist</li>
              <li> my playlist</li>
            </ul>
          </div>

        </div>
        <div className="main-playlist">
          {this.props.playlists.map((playlist) => this.returningNewPlaylist(playlist))}
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
