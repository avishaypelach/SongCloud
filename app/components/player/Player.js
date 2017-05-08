/**
 * Created by avishay on 28-Mar-17.
 */
import './player.scss';
import React from 'react';
import {connect} from 'react-redux';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownIsOpen: false
    };
  }


  isPlayerGettingASong() {
    if (this.props.currentTrack === null) {
      return (null);
    }
    else {

      const songUrl = `${this.props.currentTrack.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z`;
      let trackImg = this.props.currentTrack.artwork_url ? this.props.currentTrack.artwork_url.replace('large', 't300x300') : '';

      return (<footer className="player">
          <div className="footer-area">
            <div className="song-details-footer">
              <div className="img-area"><img src={trackImg} alt="Song thumbnail" className="img-player"/></div>
              <span className="song-title"
                    title={this.props.currentTrack.title}> {this.props.currentTrack.title} </span>
            </div>
            <div className="player-area">
              <audio className="player-tool" controls src={songUrl} autoPlay/>
            </div>
          </div>
        </footer>
      );
    }
  }


  render() {
    return this.isPlayerGettingASong();
  }
}

function mapStateToProps(stateData) {
  return {
    currentTrack: stateData.currentTrack
  }
}

export default connect(mapStateToProps)(Player);
