import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import testStyle from './helpers/testStyle';
import Layout from '../Layout';

Enzyme.configure({ adapter: new Adapter() });

describe('<Layout />', () => {
  const wrapper = shallow(<Layout />);

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

  describe('with added props - 1st set', () => {
    const wrapperWithProps = shallow(
      <Layout
        padding="30px"
        margin="2px"
        textAlign="center"
        minWidth="500px"
        maxWidth="1000px"
        minHeight="600px"
        maxHeight="1100px"
      />,
    );

    const expectedStyleList = [
      { style: 'padding', value: '30px' },
      { style: 'margin', value: '2px' },
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

  describe('with added props - 2nd set', () => {
    const wrapperWithProps = shallow(
      <Layout
        paddingTop="40px"
        paddingRight="30px"
        paddingBottom="20px"
        paddingLeft="10px"
        marginTop="2px"
        marginRight="4px"
        marginBottom="6px"
        marginLeft="8px"
      />,
    );

    const expectedStyleList = [
      { style: 'padding-top', value: '40px' },
      { style: 'padding-right', value: '30px' },
      { style: 'padding-bottom', value: '20px' },
      { style: 'padding-left', value: '10px' },
      { style: 'margin-top', value: '2px' },
      { style: 'margin-right', value: '4px' },
      { style: 'margin-bottom', value: '6px' },
      { style: 'margin-left', value: '8px' },
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
      const wrapper = shallow(<Layout left />);
      expect(wrapper.find('div')).toHaveStyleRule('margin-right', 'auto');
    });

    it('with right prop, should have style - margin-left: auto', () => {
      const wrapper = shallow(<Layout right />);
      expect(wrapper.find('div')).toHaveStyleRule('margin-left', 'auto');
    });

    it('with centered prop, should have style - margin-left: auto, margin-right: auto', () => {
      const wrapper = shallow(<Layout centered />);
      expect(wrapper.find('div')).toHaveStyleRule('margin-left', 'auto');
      expect(wrapper.find('div')).toHaveStyleRule('margin-right', 'auto');
    });
  });
});
