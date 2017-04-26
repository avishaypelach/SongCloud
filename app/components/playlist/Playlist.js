/**
 * Created by avishay on 08-Apr-17.
 */
/**
 * Created by avishay on 05-Apr-17.
 */
import './playlist.scss';
import React from 'react';
import Songs from '../songs/Songs';
import uuid from 'uuid';


import Dropdown from 'react-dropdown';
import {connect} from 'react-redux';


class Playlist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }



  editMode() {
    if (this.props.playlist.isFocusMode) {
      return (
        <div className="playlist-heading-area">
          <input className="playlist-name" placeholder={this.props.playlist.name}/>
          <button className="delete-playlist-btn"> delete</button>
        </div>
      );
    }
    else {
      return (
        <div className="playlist-heading-area">
          <span className="playlist-name" onClick={() => this.props.changeMode(this.props.index)}> {this.props.playlist.name} </span>
          <div className="number-of-songs-area">
            <span className="number-of-songs"> {this.props.playlist.songs.length} </span>
          </div>
          <button className="delete-playlist-btn"> delete</button>
        </div>
      );
    }
  }

  render() {

    return (
      <div className="playlist">
        {this.editMode()}
        <Songs
          titles={this.props.playlist.songs}
          mode={' '}
        />
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
    changeMode(value){
      dispatch({
        type: 'IS_FOCUS_MODE',
        index: value
      });
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
