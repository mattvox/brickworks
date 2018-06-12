import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import Grid from '../Grid';

Enzyme.configure({ adapter: new Adapter() });

describe('<Grid />', () => {
  const wrapper = shallow(<Grid />);

  const wrapperWithProps = shallow(
    <Grid
      justify="flex-start"
      align="stretch"
      items="stretch"
      badProp1="this is a bad prop"
      badProp2="this is another bad prop"
      columns={1}
    />,
  );

  // const Section = Grid.withComponent('section');
  // const wrapperAsSection = shallow(<Section />);

  // const expectedProps = ['onClick', 'children', 'style', 'type', 'className'];

  it('should render correctly', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should match snapshot with props', () => {
    expect(shallowToJson(wrapperWithProps)).toMatchSnapshot();
  });

  it('should have default style - display: flex', () => {
    expect(wrapper.find('div')).toHaveStyleRule('display', 'flex');
  });

  it('should have default style - flex-flow: row wrap', () => {
    expect(wrapper.find('div')).toHaveStyleRule('flex-flow', 'row wrap');
  });

  it('should have default style - justify-content: flex-start', () => {
    expect(wrapper.find('div')).toHaveStyleRule(
      'justify-content',
      'flex-start',
    );
  });

  it('should have default style - align-content: stretch', () => {
    expect(wrapper.find('div')).toHaveStyleRule('align-content', 'stretch');
  });

  it('should have default style - align-items: stretch', () => {
    expect(wrapper.find('div')).toHaveStyleRule('align-items', 'stretch');
  });
});
