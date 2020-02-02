import React from 'react';
import './search.css';
import icon from './search-icon.png';

const Search = (props) => {
  const { placeholder } = props;
  return (
    <>
      {/* <i class="fas fa-search" aria-hidden="true"></i> */}
      {/* <input type="text" class="main-input main-name" name="NAME" /> */}
      <input className="ui-lib-search" type="text" placeholder={placeholder} />
      {/* <button type="submit">
        <icon>search</icon>
      </button> */}
    </>
  );
}

export default Search;