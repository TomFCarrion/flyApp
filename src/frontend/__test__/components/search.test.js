import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Search from '../../components/Search/Search';
import ProviderMock from '../../__mocks__/providerMock';

describe(' <Search/>', () => {
  test('SearchWrapper component render', () => {
    const search = shallow(
      <ProviderMock>
        <Search />
      </ProviderMock>,
    );
    expect(search.length).toEqual(1);
  });
});

describe('Search snapshot', () => {
  test('Check Search snapshot', () => {
    const search = create(
      <ProviderMock>
        <Search />
      </ProviderMock>,
    );
    expect(search.toJSON()).toMatchSnapshot();
  });
});
