/**
 * Created by avishay on 26-Apr-17.
 */
import './sidebar.scss';
import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';


class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  createPlaylist() {
    const value = {
      id: uuid(),
      name: 'untitled',
      isFocusMode: true,
      songs: []
    };
    this.props.createNewPlaylistInStore(value);
  }

  createPlaylistList(playlist) {
    return (
      <li className="sidebar-playlists-list-li" key={playlist.id}>
        <label htmlFor={playlist.id} className="sidebar-playlist-name">{playlist.name}</label>
      </li>
    );
  }

  render() {

    return (
      <div className="side-bar-playlist">
        <div className="adding-a-playlist-btn-area">
          <button className="adding-a-playlist-btn" onClick={() => this.createPlaylist()}> Add new playlist </button>
        </div>
        <div className="playlists-names-area">
          <ul className="playlists-names">
            {this.props.playlists.map((playlist) => this.createPlaylistList(playlist))}
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
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
