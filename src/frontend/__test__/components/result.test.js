import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Result from '../../components/Result/Result';
import ProviderMock from '../../__mocks__/providerMock';

describe(' <Result/>', () => {
  test('Result component render', () => {
    const result = shallow(
      <ProviderMock>
        <Result />
      </ProviderMock>,
    );
    expect(result.length).toEqual(1);
  });
});

describe('Result snapshot', () => {
  test('Check Result snapshot', () => {
    const searchWrapper = create(
      <ProviderMock>
        <Result />
      </ProviderMock>,
    );
    expect(searchWrapper.toJSON()).toMatchSnapshot();
  });
});
