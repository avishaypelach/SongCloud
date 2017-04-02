/**
 * Created by avishay on 28-Mar-17.
 */
export default function Player() {
  return (
    <footer>
      <div className="player-area">
        <div><img src="" alt="Song thumbnail"/></div>
        <div className="song-details-footer">
          <ul>
            <li> Song Name</li>
            <li> Artist</li>
          </ul>
          <div>
            <audio controls>
              <source src="" type=""/>
            </audio>
          </div>
        </div>
      </div>
    </footer>
  );
};
