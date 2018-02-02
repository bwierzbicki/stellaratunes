import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Text from '../Text/index';
import Song from '../Song';

function Favourites({ favourites }) {
  return (
    <div className="favourites">
      <div className="fav-title">
        <Text heading>Favourites</Text>
      </div>
      <div className="elements">
        {favourites.map((song, key) => <Song song={favourites[key]} key={key.toString()} />)}
      </div>
    </div>
  );
}


Favourites.propTypes = {
  favourites: PropTypes.arrayOf(PropTypes.any).isRequired
};

Favourites.defaultProps = {
};

export default Favourites;
