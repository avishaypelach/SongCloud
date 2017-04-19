/**
 * Created by avishay on 06-Apr-17.
 */
import store from '../../store'
import './song.scss';
import React from 'react';
import uuid from 'uuid';
import DropDown from "../dropdown/DropDown";
import { connect } from 'react-redux';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownIsOpen: false
    };
  }

  msToTime(duration) {

    const seconds = parseInt((duration / 1000) % 60);
    const minutes = parseInt((duration / (1000 * 60)) % 60);

    return (((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds));
  }

  openDropdown() {
    this.setState({dropDownIsOpen: !this.state.dropDownIsOpen})
  }

  createPlaylist() {

  }

  handelStoreClick(value) {
    store.dispatch({
      type: 'UPDATE_CURRENT_TRACK',
      song: value
    })
  }

  isSongInPlaylist(value) {
    let temp = this.props.playlists.find((playlist) => playlist.songs.find((song) => song.id === value.id));
    if (temp){
      return <i className="fa fa-heart blue-heart song-like" aria-hidden="true" onClick={() => this.openDropdown()}/>;
    }
    else {
      return <i className="fa fa-heart-o song-like" aria-hidden="true" onClick={() => this.openDropdown()}/>
    }
  }

  songCreator() {
    let trackImg = this.props.song.artwork_url ? this.props.song.artwork_url.replace('large', 't300x300') : '';

    let dropdown = this.state.dropDownIsOpen ?
      <DropDown
        showBtn={true}
        mode={this.props.mode}
        // playlists={this.props.playlists}
        song={this.props.song}
      /> : <div></div>;

    return (
      <div className="song-card song">
        <div className="img-holder" onClick={() => this.handelStoreClick(this.props.song)}>
          <img className="song-img" src={trackImg}/>
          <i className="fa fa-play-circle-o play-btn-on-card"
             aria-hidden="true"/>
        </div>
        <div className="song-details">
          <p className="song-name"> {this.props.song.title.slice(0, 30) + '...'} </p>
          <i className="fa fa-clock-o song-length-icon" aria-hidden="true"/>
          <span className="song-length"> {this.msToTime(this.props.song.duration)} </span>
          {this.isSongInPlaylist(this.props.song)}
          {dropdown}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.songCreator(this.props.song)}
      </div>
    );
  }
}

function mapStateToProps(stateData) {
  return {
    playlists: stateData.playlists
  }
}

export default connect(mapStateToProps)(Song);
