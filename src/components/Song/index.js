import React from 'react';
import PropTypes from 'prop-types';

function Song(props) {
  return (
    <div className="song">
      {props.song.artistName} - {props.song.trackName}
      <button onClick={props.addSongToFavourites}>addSongToFavourites</button>
    </div>
  );
}

Song.propTypes = {
  song: PropTypes.objectOf(PropTypes.any).isRequired,
  addSongToFavourites: PropTypes.func
};

Song.defaultProps = {
};

export default Song;
