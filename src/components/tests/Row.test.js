import React from 'react';
import { css } from 'styled-components';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import testStyle from './helpers/testStyle';
import Row from '../Row';
import Col from '../Col';

Enzyme.configure({ adapter: new Adapter() });

describe('<Row />', () => {
  const wrapper = shallow(<Row />);

  it('should render correctly', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });

  describe('with default props/settings', () => {
    const expectedStyleList = [
      { style: 'display', value: 'flex' },
      { style: 'flex', value: '0 1 100%' },
      { style: 'flex-flow', value: 'row wrap' },
      { style: 'justify-content', value: 'center' },
      { style: 'order', value: '0' },
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
      <Row flow="column nowrap" justify="space-between" order={2} />
    );

    const expectedStyleList = [
      { style: 'display', value: 'flex' },
      { style: 'flex', value: '0 1 100%' },
      { style: 'flex-flow', value: 'column nowrap' },
      { style: 'justify-content', value: 'space-between' },
      { style: 'order', value: '2' },
    ];

    it('should match snapshot', () => {
      expect(shallowToJson(wrapperWithProps)).toMatchSnapshot();
    });

    expectedStyleList.forEach(({ style, value }) => {
      return testStyle(wrapperWithProps, style, value);
    });
  });

  describe('with columns/breakpoints', () => {
    it(`should pass flex and adjust flex-basis based on media queries when passed xs, sm, md, lg, and xl props`, () => {
      const tree = renderer
        .create(
          <Row xs={4} sm={1} md={2} lg={4} xl={10}>
            <Col />
          </Row>
        )
        .toJSON();

      // prettier-ignore
      expect(tree).toHaveStyleRule('flex-basis', '25%', {
        modifier: css`> .brckwrx-col`,
      });

      // prettier-ignore
      expect(tree).toHaveStyleRule('flex-basis', '100%', {
        media: 'screen and (min-width: 576px)',
        modifier: css`> .brckwrx-col`,
      });

      // prettier-ignore
      expect(tree).toHaveStyleRule('flex-basis', '50%', {
        media: 'screen and (min-width: 768px)',
        modifier: css`> .brckwrx-col`,
      });

      // prettier-ignore
      expect(tree).toHaveStyleRule('flex-basis', '25%', {
        media: 'screen and (min-width: 992px)',
        modifier: css`> .brckwrx-col`,
      });

      // prettier-ignore
      expect(tree).toHaveStyleRule('flex-basis', '10%', {
        media: 'screen and (min-width: 1200px)',
        modifier: css`> .brckwrx-col`,
      });
    });
  });
});
