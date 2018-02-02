import React from 'react';
import PropTypes from 'prop-types';
import Song from '../Song';

function Songs({ songs }) {
  return (
    <div className="container">
      {songs.map((song, key) => <Song song={songs[key]} key={key.toString()} />)}
    </div>
  );
}

Songs.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.any).isRequired
};

Songs.defaultProps = {
};

export default Songs;
