import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { css } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import testStyle from './helpers/testStyle';
import Grid from '../Grid';
import Row from '../Row';
import Col from '../Col';

Enzyme.configure({ adapter: new Adapter() });

describe('<Grid />', () => {
  const wrapper = shallow(<Grid />);

  it('should render correctly', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });

  describe('with default props/settings', () => {
    const expectedStyleList = [
      { style: 'display', value: 'flex' },
      { style: 'flex-flow', value: 'row wrap' },
      { style: 'justify-content', value: 'center' },
    ];

    it('should match snapshot', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    expectedStyleList.forEach(({ style, value }) => {
      return testStyle(wrapper, style, value);
    });
  });

  describe('with added props', () => {
    const wrapperWithProps = shallow(
      <Grid
        flow="column nowrap"
        justify="center"
        alignContent="space-around"
        alignItems="flex-end"
        badProp1="this is a bad prop"
        badProp2="this is another bad prop"
      />
    );

    const expectedStyleList = [
      { style: 'flex-flow', value: 'column nowrap' },
      { style: 'justify-content', value: 'center' },
      { style: 'align-content', value: 'space-around' },
      { style: 'align-items', value: 'flex-end' },
    ];

    it('should match snapshot with props', () => {
      expect(shallowToJson(wrapperWithProps)).toMatchSnapshot();
    });

    expectedStyleList.forEach(({ style, value }) => {
      return testStyle(wrapperWithProps, style, value);
    });
  });

  describe('with spacing', () => {
    it('should have padding-top, padding-bottom by default', () => {
      const tree = renderer
        .create(
          <Grid spacing>
            <Col />
          </Grid>
        )
        .toJSON();

      // prettier-ignore
      expect(tree).toHaveStyleRule('padding-top', 'calc(1em / 2)', {
        modifier: css`
          :not(.brckwrx-row) :not(.brckwrx-col)
        `,
      });

      // prettier-ignore
      expect(tree).toHaveStyleRule('padding-bottom', 'calc(1em / 2)', {
        modifier: css`
          :not(.brckwrx-row) :not(.brckwrx-col)
        `,
      });
    });

    it('should have correct padding-top, padding-bottom when passed with spacing prop', () => {
      const tree = renderer
        .create(
          <Grid spacing={2}>
            <Col />
          </Grid>
        )
        .toJSON();

      // prettier-ignore
      expect(tree).toHaveStyleRule('padding-top', 'calc(2em / 2)', {
        modifier: css`
          :not(.brckwrx-row) :not(.brckwrx-col)
        `,
      });

      // prettier-ignore
      expect(tree).toHaveStyleRule('padding-bottom', 'calc(2em / 2)', {
        modifier: css`
          :not(.brckwrx-row) :not(.brckwrx-col)
        `,
      });
    });
  });

  describe('passes styles down to children columns', () => {
    const wrapper = mount(
      <Grid spacing={2}>
        <Col>Hello</Col>
      </Grid>
    );

    Col.displayName = 'Col';

    it('should match snapshot with props', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it(`should pass padding when spacing prop is present`, () => {
      const tree = renderer
        .create(
          <Grid spacing={2}>
            <Row>
              <Col />
            </Row>
          </Grid>
        )
        .toJSON();

      // prettier-ignore
      expect(tree).toHaveStyleRule('padding', 'calc(2em / 2)', {
        modifier: css`:not(.brckwrx-row) :not(.brckwrx-col) .brckwrx-col`,
      });

      // prettier-ignore
      expect(tree).toHaveStyleRule('padding-left', 'calc(2em / 2)', {
        modifier: css`:not(.brckwrx-row) :not(.brckwrx-col) .brckwrx-row`,
      });

      // prettier-ignore
      expect(tree).toHaveStyleRule('padding-right', 'calc(2em / 2)', {
        modifier: css`:not(.brckwrx-row) :not(.brckwrx-col) .brckwrx-row`,
      });
    });
  });
});
