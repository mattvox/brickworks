import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import Col from '../Col';

Enzyme.configure({ adapter: new Adapter() });

describe('<Col />', () => {
  const wrapper = shallow(<Col />);

  it('should render correctly', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should have default style - flex: 0 1 auto', () => {
    expect(wrapper.find('div')).toHaveStyleRule('flex', '0 1 auto');
  });
});
