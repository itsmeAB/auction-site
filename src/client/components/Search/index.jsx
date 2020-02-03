import React from 'react';
import './search.css';
import icon from './icon.png';

const Search = (props) => {
  const { placeholder } = props;
  return (
    <>
      {/* <i class="fas fa-search" aria-hidden="true"></i> */}
      {/* <input type="text" class="main-input main-name" name="NAME" /> */}
      <input className="ui-lib-search" type="text" placeholder={placeholder} />
      <img src={icon} alt="Smiley face" height="42" width="42"/>
      <img src="gatsby-astronaut.png" />
    </>
  );
}

export default Search;