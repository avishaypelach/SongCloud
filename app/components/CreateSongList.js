/**
 * Created by avishay on 30-Mar-17.
 */
import React from 'react';


export default function CreateSongsList(props) {
  // console.info('createsonglistp',props.currentTrack);

  function songCreator(value) {
    let trackImg = value.artwork_url ? value.artwork_url.replace('large', 't300x300') : '';

    return(
      <div className="song-card" key={value.id}>
        <div className="img-holder">
          <img className="song-img" src={trackImg} onClick={() => props.currentTrack(value)}/>
          <i className="fa fa-play-circle-o play-btn-on-card" onClick={() => props.currentTrack(value)} aria-hidden="true"> </i>
        </div>
        <div className="song-details">
          <p className="song-name"> {value.title.slice(0, 30) + '...'} </p>
          <i className="fa fa-clock-o song-length-icon" aria-hidden="true"> </i>
          <span className="song-length"> song length</span>
          <i className="fa fa-heart-o song-like" aria-hidden="true"> </i>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="genre-div">
        {props.titles.map((value) => {
          return songCreator(value);
        })}
      </div>
    </div>
  );
}



