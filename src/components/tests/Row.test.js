import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import Row from '../Row';

Enzyme.configure({ adapter: new Adapter() });

describe('<Row />', () => {
  const wrapper = shallow(<Row />);

  it('should render correctly', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should have default style - flex: 0 1 100%', () => {
    expect(wrapper.find('div')).toHaveStyleRule('flex', '0 1 100%');
  });

  it('should have default style - flex-flow: inherit', () => {
    expect(wrapper.find('div')).toHaveStyleRule('flex-flow', 'inherit');
  });

  it('should have default style - justify-content: inherit', () => {
    expect(wrapper.find('div')).toHaveStyleRule('justify-content', 'inherit');
  });

  it('should have default style - align-content: inherit', () => {
    expect(wrapper.find('div')).toHaveStyleRule('align-content', 'inherit');
  });

  it('should have default style - align-items: inherit', () => {
    expect(wrapper.find('div')).toHaveStyleRule('align-items', 'inherit');
  });

  it('should have default style - order: 0', () => {
    expect(wrapper.find('div')).toHaveStyleRule('order', '0');
  });
});
