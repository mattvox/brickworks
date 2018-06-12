import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import Layout from '../Layout';

Enzyme.configure({ adapter: new Adapter() });

describe('<Col />', () => {
  const wrapper = shallow(<Layout />);

  it('should render correctly', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should have default style - box-sizing: border-box', () => {
    expect(wrapper.find('div')).toHaveStyleRule('box-sizing', 'border-box');
  });
});
