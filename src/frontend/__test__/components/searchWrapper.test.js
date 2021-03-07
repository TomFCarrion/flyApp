import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import SearchWrapper from '../../components/Search/SearchWrapper';
import ProviderMock from '../../__mocks__/providerMock';

describe(' <SearchWrapper/>', () => {
  test('SearchWrapper component render', () => {
    const searchWrapper = shallow(
      <ProviderMock>
        <SearchWrapper />
      </ProviderMock>,
    );
    expect(searchWrapper.length).toEqual(1);
  });
});

describe('SearchWrapper snapshot', () => {
  test('Check SearchWrapper snapshot', () => {
    const searchWrapper = create(
      <ProviderMock>
        <SearchWrapper />
      </ProviderMock>,
    );
    expect(searchWrapper.toJSON()).toMatchSnapshot();
  });
});
