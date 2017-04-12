/**
 * Created by avishay on 06-Apr-17.
 */
import './song.scss';
import React from 'react';
import uuid from 'uuid';

export default class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownIsOpen: true,
      mode:[]
    };
  }

  msToTime(duration) {

    const seconds = parseInt((duration / 1000) % 60);
    const minutes = parseInt((duration / (1000 * 60)) % 60);

    return (((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds));
  }

  openDropdown(){
    if (this.state.dropDownIsOpen === true){
      this.setState({dropDownIsOpen: false})
    }
    else {
      this.setState({dropDownIsOpen: false})
    }
  }

  createPlaylist(){

  }

  songCreator(value) {
    let trackImg = value.artwork_url ? value.artwork_url.replace('large', 't300x300') : '';

    return (
      <div className="song-card song">
        <div className="img-holder">
          <img className="song-img" src={trackImg} onClick={() => this.props.currentTrack(value)}/>
          <i className="fa fa-play-circle-o play-btn-on-card" onClick={() => this.props.currentTrack(value)}
             aria-hidden="true"/>
        </div>
        <div className="song-details">
          <p className="song-name"> {value.title.slice(0, 30) + '...'} </p>
          <i className="fa fa-clock-o song-length-icon" aria-hidden="true"/>
          <span className="song-length"> {this.msToTime(value.duration)} </span>
          <i className="fa fa-heart-o song-like" aria-hidden="true" onClick={() => this.openDropdown}/>



          <div className="song-dropdown hidden">
            <div className="dropdown-headers">
              <span> Add to playlist </span>
              <br/>
              <a className="create-song-dropdown" href="#" onClick={() => this.createPlaylist}> Create Playlist <i className="fa fa-plus" aria-hidden="true"/> </a>
            </div>
              <div className="dropdown-playlists-list-area">
              <ul className="dropdown-playlists-list">
                <li><label htmlFor=""> <input type="checkbox"/> <span> my songs </span> </label></li>
              </ul>
            </div>
          </div>

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
