import React from 'react';
import Search from './Search';
require('./styles/searchWrapper.scss');
import mainIllustration from '../../assets/mainIllustrations.svg'

const SearchWrapper = () => {
  return (
    <div className="searchWrapper">
      <div className="title">
        <img className="image" src={mainIllustration} />
      </div>
      <Search />
    </div>
  );
};
export default SearchWrapper;
