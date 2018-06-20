import styled from 'styled-components';

import breakpoints from '../utils/defaultBreakpoints';
import { gridTypes, baseTypes } from './types';
import { gridStyles } from './Grid';
import { baseStyles } from './Base';

// prettier-ignore
export const Row = styled.div.attrs({ className: `brckwrx-row` })`
  ${baseStyles}
  flex: 0 1 100%;
  order: ${({ order }) => order || 0};
  ${gridStyles}
`;

Row.propTypes = {
  ...gridTypes,
  ...baseTypes,
};

Row.defaultProps = {
  breakpoints: { ...breakpoints },
};

Row.nav = Row.withComponent('nav');
Row.aside = Row.withComponent('aside');
Row.main = Row.withComponent('main');
Row.header = Row.withComponent('header');
Row.footer = Row.withComponent('footer');
Row.section = Row.withComponent('section');

export default Row;
