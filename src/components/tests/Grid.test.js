import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import Grid from '../Grid';

Enzyme.configure({ adapter: new Adapter() });

// Helpers
const testStyle = (wrapper, style, value) =>
  it(`should have style - ${style}: ${value}`, () => {
    expect(wrapper.find('div')).toHaveStyleRule(style, value);
  });

// Tests
describe('<Grid />', () => {
  const wrapper = shallow(<Grid />);

  it('should render correctly', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });

  describe('<Grid /> with default props/settings', () => {
    const expectedStyleList = [
      { style: 'display', value: 'flex' },
      { style: 'flex-flow', value: 'row wrap' },
      { style: 'justify-content', value: 'flex-start' },
      { style: 'align-content', value: 'stretch' },
      { style: 'align-items', value: 'stretch' },
    ];

    expectedStyleList.forEach(({ style, value }) => {
      return testStyle(wrapper, style, value);
    });

    it('should match snapshot', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('<Grid /> with added props', () => {
    const wrapperWithProps = shallow(
      <Grid
        flow="column nowrap"
        justify="center"
        align="space-around"
        items="flex-end"
        badProp1="this is a bad prop"
        badProp2="this is another bad prop"
        padded
      />,
    );

    const expectedStyleList = [
      { style: 'flex-flow', value: 'column nowrap' },
      { style: 'justify-content', value: 'center' },
      { style: 'align-content', value: 'space-around' },
      { style: 'align-items', value: 'flex-end' },
      { style: 'padding-right', value: '1em' },
      { style: 'padding-bottom', value: '1em' },
    ];

    expectedStyleList.forEach(({ style, value }) => {
      return testStyle(wrapperWithProps, style, value);
    });

    it('should match snapshot with props', () => {
      expect(shallowToJson(wrapperWithProps)).toMatchSnapshot();
    });
  });

  // const Section = Grid.withComponent('section');
  // const wrapperAsSection = shallow(<Section />);
  // const expectedProps = ['onClick', 'children', 'style', 'type', 'className'];
});
