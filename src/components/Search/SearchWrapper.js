import React from 'react';
import Search from './Search';
require('./styles/searchWrapper.scss');

const SearchWrapper = () => {
  return (
    <div>
      <h1 className="title"> Search Your Flight</h1>
      <Search />
    </div>
  );
};
export default SearchWrapper;
