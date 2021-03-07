import React from 'react';
import Search from './Search';
import mainIllustration from '../../assets/mainIllustrations.svg';

require('./styles/searchWrapper.scss');

const SearchWrapper = () => {
  return (
    <div className='searchWrapper'>
      <div className='title'>
        <img className='image' src={mainIllustration} />
      </div>
      <Search />
    </div>
  );
};
export default SearchWrapper;
