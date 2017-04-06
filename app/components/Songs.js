import React from 'react';

export default class Songs extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      mode: false
    };

    // this.openDropdown = this.openDropdown.bind(this);

  }

  songCreator(value) {

    let trackImg = value.artwork_url ? value.artwork_url.replace('large', 't300x300') : '';

    function msToTime(duration) {
      const seconds = parseInt((duration / 1000) % 60);
      const minutes = parseInt((duration / (1000 * 60)) % 60);

      return (((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds));
    }

    return (
      <div className="song-card" key={value.id}>
        <div className="img-holder">
          <img className="song-img" src={trackImg} onClick={() => props.currentTrack(value)}/>
          <i className="fa fa-play-circle-o play-btn-on-card" onClick={() => props.currentTrack(value)}
             aria-hidden="true"> </i>
        </div>
        <div className="song-details">
          <p className="song-name"> {value.title.slice(0, 30) + '...'} </p>
          <i className="fa fa-clock-o song-length-icon" aria-hidden="true"> </i>
          <span className="song-length"> {msToTime(value.duration)}</span>
          <i className="fa fa-heart-o song-like" aria-hidden="true" onClick={this.openDropdown}/>
          {/*<div className="toggle hidden">*/}
            {/*<span> </span>*/}
            {/*<ul>*/}
              {/*<li> </li>*/}
              {/*<li> </li>*/}
            {/*</ul>*/}
          {/*</div>*/}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="genre-div">
        {this.props.titles.map((value) => {
          return this.songCreator(value);
        })}
      </div>
    );
  }
}


