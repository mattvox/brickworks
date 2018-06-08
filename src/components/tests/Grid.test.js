import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import Grid from '../Grid';

Enzyme.configure({ adapter: new Adapter() });

describe('<Grid />', () => {
  const wrapper = shallow(<Grid />);

  // const wrapperWithProps = shallow(
  //   <Grid
  //     wrap="wrap"
  //     direction="row"
  //     justifyContent="flex-start"
  //     alignContent="stretch"
  //     alignItems="stretch"
  //     padding={0}
  //     margin="1em"
  //     badProp1="this is a bad prop"
  //     badProp2="this is another bad prop"
  //     columns={1}
  //   />,
  // );

  // const Section = Grid.withComponent('section');
  // const wrapperAsSection = shallow(<Section />);

  // const expectedProps = ['onClick', 'children', 'style', 'type', 'className'];

  it('should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should render a <div>', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
