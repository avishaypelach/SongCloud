/**
 * Created by avishay on 30-Mar-17.
 */
import React from 'react';

export default function CreateSongsList(props) {
  return (
    <div>
      <div className="genre-div">
        {props.titles.map((value) => {
          return <div className="song-card" key={value.title}>
            <div className="img-holder">
              <img className="song-img" src={value.artwork_url}/>
              <i className="fa fa-play-circle-o play-btn-on-card" aria-hidden="true"> </i>
            </div>
            <div className="song-details">
              <p className="song-name"> {value.title.slice(0, 30) + '...'} </p>
              <i className="fa fa-clock-o song-length-icon" aria-hidden="true"> </i>
              <span className="song-length"> song length</span>
              <i className="fa fa-heart-o song-like" aria-hidden="true"> </i>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}



