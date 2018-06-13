import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import testStyle from './helpers/testStyle';
import Col from '../Col';

Enzyme.configure({ adapter: new Adapter() });

describe('<Col />', () => {
  const wrapper = shallow(<Col />);

  it('should render correctly', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });

  describe('with default props/settings', () => {
    it('should have default style - flex: 0 1 auto', () => {
      expect(wrapper.find('div')).toHaveStyleRule('flex', '0 1 auto');
    });

    it('should match snapshot', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('with added props - 1st set', () => {
    const wrapperWithProps = shallow(
      <Col
        flex={{ grow: 2, shrink: 3, basis: '75%' }}
        order={2}
        alignSelf="center"
      />,
    );

    const expectedStyleList = [
      { style: 'flex', value: '2 3 75%' },
      { style: 'order', value: '2' },
      { style: 'align-self', value: 'center' },
    ];

    it('should match snapshot with props', () => {
      expect(shallowToJson(wrapperWithProps)).toMatchSnapshot();
    });

    expectedStyleList.forEach(({ style, value }) => {
      return testStyle(wrapperWithProps, style, value);
    });
  });

  describe('with added props - 2nd set', () => {
    const wrapperWithProps = shallow(<Col grow={5} shrink={4} basis={50} />);

    const expectedStyleList = [
      { style: 'flex-grow', value: '5' },
      { style: 'flex-shrink', value: '4' },
      { style: 'flex-basis', value: '50%' },
    ];

    it('should match snapshot with props', () => {
      expect(shallowToJson(wrapperWithProps)).toMatchSnapshot();
    });

    expectedStyleList.forEach(({ style, value }) => {
      return testStyle(wrapperWithProps, style, value);
    });
  });
});
