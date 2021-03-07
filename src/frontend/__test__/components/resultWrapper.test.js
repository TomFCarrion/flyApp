import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ResultWrapper from '../../components/Result/ResultWrapper';
import ProviderMock from '../../__mocks__/providerMock';

describe(' <ResultWrapper/>', () => {
  test('ResultWrapper component render', () => {
    const result = shallow(
      <ProviderMock>
        <ResultWrapper />
      </ProviderMock>,
    );
    expect(result.length).toEqual(1);
  });
});

describe('ResultWrapper snapshot', () => {
  test('Check Result snapshot', () => {
    const searchWrapper = create(
      <ProviderMock>
        <ResultWrapper />
      </ProviderMock>,
    );
    expect(searchWrapper.toJSON()).toMatchSnapshot();
  });
});
