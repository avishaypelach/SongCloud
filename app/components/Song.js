/**
 * Created by avishay on 06-Apr-17.
 */
import React from 'react';

export default class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  msToTime(duration) {
    const seconds = parseInt((duration / 1000) % 60);
    const minutes = parseInt((duration / (1000 * 60)) % 60);

    return (((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds));
  }

  songCreator(value) {
    console.info('hola', this.value);
    console.info('hello', this.props);
    let trackImg = value.artwork_url ? value.artwork_url.replace('large', 't300x300') : '';

    return (
      <div className="song-card">
        <div className="img-holder">
          <img className="song-img" src={trackImg} onClick={() => props.currentTrack(value)}/>
          <i className="fa fa-play-circle-o play-btn-on-card" onClick={() => props.currentTrack(value)}
             aria-hidden="true"> </i>
        </div>
        <div className="song-details">
          <p className="song-name"> {value.title.slice(0, 30) + '...'} </p>
          <i className="fa fa-clock-o song-length-icon" aria-hidden="true"> </i>
          <span className="song-length"> {this.msToTime(value.duration)} </span>
          <i className="fa fa-heart-o song-like" aria-hidden="true"> </i>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {console.info(this.props.value)}
        {this.songCreator(this.props.value)}
      </div>
    );
  }
}
