/**
 * Created by avishay on 28-Mar-17.
 */
import './player.scss';
import React from 'react';
import { connect } from 'react-redux';

function Player(props) {
  const songUrl = `${props.currentTrack.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z`;
  let trackImg = props.currentTrack.artwork_url ? props.currentTrack.artwork_url.replace('large', 't300x300') : '';

  return (
    <footer className="player">
      <div className="footer-area">
        <div className="song-details-footer">
          <div className="img-area"><img src={trackImg} alt="Song thumbnail" className="img-player"/></div>
          <span className="song-title" title={props.currentTrack.title}> {props.currentTrack.title} </span>
        </div>
        <div className="player-area">
          <audio className="player-tool" controls src={songUrl} autoPlay/>
        </div>
      </div>
    </footer>
  );
}

function mapStateToProps(stateData) {
  return {
    currentTrack: stateData.currentTrack
  }
}

export default connect(mapStateToProps)(Player);
