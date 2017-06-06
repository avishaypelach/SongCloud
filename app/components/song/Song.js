/**
 * Created by avishay on 06-Apr-17.
 */
import store from '../../store'
import './song.scss';
import React from 'react';
import uuid from 'uuid';
import DropDown from "../dropdown/DropDown";
import {connect} from 'react-redux';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownIsOpen: false,
      playingMode: false
    };
    this.handelSongClick = this.handelSongClick.bind(this);
    this.whatModeIconOnSongIs = this.whatModeIconOnSongIs.bind(this);
  }

  msToTime(duration) {

    const seconds = parseInt((duration / 1000) % 60);
    const minutes = parseInt((duration / (1000 * 60)) % 60);

    return (((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds));
  }

  openDropdown() {
    this.setState({dropDownIsOpen: !this.state.dropDownIsOpen})
  }

  handelSongClick(value) {
    this.props.moveSongToPlaylist(value);
    this.changSongMode();
  }

  isSongInPlaylist(value) {
    let temp = this.props.playlists.find((playlist) => playlist.songs.find((song) => song.id === value.id));
    if (temp) {
      return <i className="fa fa-heart blue-heart song-like" aria-hidden="true" onClick={() => this.openDropdown()}/>;
    }
    else {
      return <i className="fa fa-heart-o song-like" aria-hidden="true" onClick={() => this.openDropdown()}/>
    }
  }

  isSongPlaying() {
    this.setState({playingMode: !this.state.playingMode})
  }

  whatModeIconOnSongIs() {
    if (this.props.currentTrack !== null) {
      if (this.props.currentTrack.id === this.props.song.id) {
        if (this.props.mode === 'play') {
          return <i className="fa fa-pause-circle-o pause-btn-on-card" aria-hidden="true"/>;
        }
        else {
          return <i className="fa fa-play-circle-o play-btn-on-card" aria-hidden="true"/>;
        }
      }
    }
    else {
      return null;
    }
  }

  changSongMode() {
    if (this.props.currentTrack !== null) {
      if (this.props.currentTrack.id === this.props.song.id) {
        if (this.props.mode === 'play') {
          this.props.songMode('pause');
        }
        else {
          this.props.songMode('play');
        }
      }
    }
    else {
      this.props.songMode('play');
    }
  }

  songTitleLength() {
    if (this.props.song.title.length > 40) {
      return (<p className="song-name"> {this.props.song.title.slice(0, 40) + '...'} </p>);
    }
    else {
      return (<p className="song-name"> {this.props.song.title} </p>)
    }
  }

  songCreator() {
    let trackImg = this.props.song.artwork_url ? this.props.song.artwork_url.replace('large', 't300x300') : '';
    let dropdown = this.state.dropDownIsOpen ?
      <DropDown
        showBtn={true}
        mode={this.props.mode}
        {...this.props}
        song={this.props.song}
      /> : <div></div>;

    return (
      <div className="song-card song">
        <div className="img-holder" onClick={() => {
          this.handelSongClick(this.props.song);
          this.isSongPlaying();
        }}>
          <div className="song-img"
               style={{'backgroundImage': `url("${trackImg}")`}}
          />
          {this.whatModeIconOnSongIs()}
        </div>
        <div className="song-details">
          {this.songTitleLength()}
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
    playlists: stateData.playlists,
    currentTrack: stateData.currentTrack,
    mode: stateData.setAudioModeReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    moveSongToPlaylist(value){
      dispatch({
        type: 'UPDATE_CURRENT_TRACK',
        song: value
      });
    },
    songMode(value){
      dispatch({
        type: 'CHANG_SONG_MODE',
        mode: value
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);
