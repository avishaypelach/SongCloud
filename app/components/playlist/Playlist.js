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


  handelValue(event) {
    if (event.target.value.length === 0) {
      this.props.handelChange('untitled', this.props.index)
    }
    else {
      this.props.handelChange(event.target.value, this.props.index)
    }
  }

  getPlaylist(event) {
    this.props.removePlaylist(event.target.value, this.props.index, this.props.playlist.name)
  }

  editMode() {
    if (this.props.playlist.isFocusMode) {
      return (
        <div className="playlist-heading-area">
          <form type="text" className="playlist-name" onSubmit={(e) => {
            e.preventDefault();
            this.props.changeMode(this.props.index);
          }
          }>
            <input type="text" autoFocus={this.props.playlist.isFocusMode} className="playlist-name"
                   onBlur={() => this.props.changeMode(this.props.index)} onChange={(e) => this.handelValue(e)}
                   placeholder={this.props.playlist.name}/></form>
          <button className="delete-playlist-btn"> delete</button>
        </div>
      );
    }
    else {
      return (
        <div className="playlist-heading-area">
          <span className="playlist-name"
                onClick={() => this.props.changeMode(this.props.index)}> {this.props.playlist.name} </span>
          <div className="number-of-songs-area">
            <span className="number-of-songs"> {this.props.playlist.songs.length} </span>
          </div>
          <button className="delete-playlist-btn" onClick={(e) => this.getPlaylist(e)}> delete</button>
        </div>
      );
    }
  }

  isEmptyPlaylist() {
    if (this.props.playlist.songs.length === 0) {
      return <div className="no-songs-in-playlist-heading"><span>"Add some songs to this playlist." </span></div>
    }
    else {
      return (<Songs
        songs={this.props.playlist.songs}
        mode={' '}
      />);
    }
  }

  render() {
    return (
      <div className="playlist">
        {this.editMode()}
        {this.isEmptyPlaylist()}
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
    },
    handelChange(event, index){
      dispatch({
        type: 'UPDATE_PLAYLIST_NAME',
        value: event,
        index: index
      })
    },
    removePlaylist(event, index, name){
      dispatch({
        type: 'DELETE_PLAYLIST',
        value: event,
        index: index,
        name: name
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
