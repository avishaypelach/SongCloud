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

  componentDidUpdate(prevProps) {
    if (prevProps === this.props.currentTrack) {
      if (this.props.currentTrack !== null) {
        if (this.props.mode === 'play') {
          this.player.play();
        }
        else if (this.props.mode === 'pause') {
          this.player.pause()
        }
      }
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.currentTrack === this.props.currentTrack) {
      if (this.props.currentTrack !== null) {
        if (this.props.mode === 'play') {
          this.player.pause();
        }
        else if (this.props.mode === 'pause') {
          this.player.play();
        }
      }
    }
    else if(this.player){
      this.player.play();
    }
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
              <audio className="player-tool" controls src={songUrl} autoPlay ref={(ref) => this.player = ref }
                     onPlay={() => this.props.songMode('play')} onPause={() => this.props.songMode('pause')}/>
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
    currentTrack: stateData.currentTrack,
    mode: stateData.setAudioModeReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    songMode(value){
      dispatch({
        type: 'CHANG_SONG_MODE',
        mode: value
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
