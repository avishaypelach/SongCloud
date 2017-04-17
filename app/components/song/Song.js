/**
 * Created by avishay on 06-Apr-17.
 */
import store from '../../store'
import './song.scss';
import React from 'react';
import uuid from 'uuid';
import DropDown from "../dropdown/DropDown";

export default class Song extends React.Component {
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

  songCreator(value) {
    let trackImg = value.artwork_url ? value.artwork_url.replace('large', 't300x300') : '';

    let dropdown = this.state.dropDownIsOpen ?
      <DropDown
        showBtn={true}
        mode={this.props.mode}
        playlists={this.props.playlists}
        song={value}
      /> : <div></div>;

    return (
      <div className="song-card song">
        <div className="img-holder" onClick={() => this.handelStoreClick(value)}>
          <img className="song-img" src={trackImg}/>
          <i className="fa fa-play-circle-o play-btn-on-card"
             aria-hidden="true"/>
        </div>
        <div className="song-details">
          <p className="song-name"> {value.title.slice(0, 30) + '...'} </p>
          <i className="fa fa-clock-o song-length-icon" aria-hidden="true"/>
          <span className="song-length"> {this.msToTime(value.duration)} </span>
          {this.isSongInPlaylist(value)}
          {dropdown}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.songCreator(this.props.value)}
      </div>
    );
  }
}
