import React from 'react';
import './search.css';

const Search = (props) => {
  const { placeholder } = props;
  return (
    <>
      {/* <i class="fas fa-search" aria-hidden="true"></i> */}
      {/* <input type="text" class="main-input main-name" name="NAME" /> */}
      <input className="ui-lib-search" type="text" placeholder={placeholder} />
      <img src="gatsby-astronaut.png" />
    </>
  );
}

export default Search;