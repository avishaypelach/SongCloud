/**
 * Created by avishay on 28-Mar-17.
 */
export default function Player() {
  return (
    <footer>
      <div className="footer-area">
        <div className="song-details-footer">
          <div className="img-area"> <img src="" alt="Song thumbnail"/> </div>
          <ul className="song-details-footer">
            <li> Song Name </li>
          </ul>
        </div>
          <div className="player-area">
            <audio className="player-tool" controls>
              <source src="https://api.soundcloud.com/tracks/79973942/stream?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z
" type="audio/ogg"/>
            </audio>
        </div>
      </div>
    </footer>
  );
};
