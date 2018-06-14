import styled from 'styled-components';

import breakpoints from '../utils/defaultBreakpoints';
import { gridTypes, baseTypes } from './types';
import { gridStyles } from './Grid';
import { baseStyles } from './Base';

// prettier-ignore
export const Row = styled.div.attrs({ className: `brckwrx-row` })`
  ${baseStyles}
  ${gridStyles}
  flex: 0 1 100%;
  flex-flow: ${({ flow }) => flow || 'inherit'};
  justify-content: ${({ justify }) => justify || 'inherit'};
  align-content: ${({ align }) => align || 'inherit'};
  align-items: ${({ items }) => items || 'inherit'};
  order: ${({ order }) => order || 0};
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
