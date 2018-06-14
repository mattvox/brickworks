import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import testStyle from './helpers/testStyle';
import Base from '../Base';

Enzyme.configure({ adapter: new Adapter() });

describe('<Base />', () => {
  const wrapper = shallow(<Base />);

  it('should render correctly', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });

  describe('with default props/settings', () => {
    it('should match snapshot', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should have default style - box-sizing: border-box', () => {
      expect(wrapper.find('div')).toHaveStyleRule('box-sizing', 'border-box');
    });
  });

  describe('with added props - min/max width and text align', () => {
    const wrapperWithProps = shallow(
      <Base
        textAlign="center"
        minWidth="500px"
        maxWidth="1000px"
        minHeight="600px"
        maxHeight="1100px"
      />,
    );

    const expectedStyleList = [
      { style: 'text-align', value: 'center' },
      { style: 'min-width', value: '500px' },
      { style: 'max-width', value: '1000px' },
      { style: 'min-height', value: '600px' },
      { style: 'max-height', value: '1100px' },
    ];

    it('should match snapshot with props', () => {
      expect(shallowToJson(wrapperWithProps)).toMatchSnapshot();
    });

    expectedStyleList.forEach(({ style, value }) => {
      return testStyle(wrapperWithProps, style, value);
    });
  });

  describe('with added props - left, right, centered', () => {
    it('with left prop, should have style - margin-right: auto', () => {
      const wrapper = shallow(<Base left />);
      expect(wrapper.find('div')).toHaveStyleRule('margin-right', 'auto');
    });

    it('with right prop, should have style - margin-left: auto', () => {
      const wrapper = shallow(<Base right />);
      expect(wrapper.find('div')).toHaveStyleRule('margin-left', 'auto');
    });

    it('with centered prop, should have style - margin-left: auto, margin-right: auto', () => {
      const wrapper = shallow(<Base centered />);
      expect(wrapper.find('div')).toHaveStyleRule('margin-left', 'auto');
      expect(wrapper.find('div')).toHaveStyleRule('margin-right', 'auto');
    });
  });
});
