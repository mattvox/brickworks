import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import Row from './Row';

Enzyme.configure({ adapter: new Adapter() });

describe('<Row />', () => {
  const wrapper = shallow(<Row />);

  it('should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should render a <div>', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
