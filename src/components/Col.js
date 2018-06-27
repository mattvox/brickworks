import styled, { css } from 'styled-components';

import applyFlex from '../utils/applyFlex';
import { colTypes, baseTypes, gridTypes } from './types';
import { gridStyles } from './Grid';
import { baseStyles } from './Base';

// prettier-ignore
const Col = styled.div.attrs({ className: `brckwrx-col` })`
  margin: 0;
  ${baseStyles}
  flex: ${({ flex }) => applyFlex(flex) || '1 1 auto'};
  ${({ order, alignSelf, grid }) => css`
    ${order && css`order: ${order};`}
    ${alignSelf && css`align-self: ${alignSelf};`}
    ${grid && gridStyles}
    ${grid && css`padding: 0 !important;`}
    .brckwrx-row {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  `}
`;

Col.propTypes = {
  ...baseTypes,
  ...colTypes,
  ...gridTypes,
};

Col.nav = Col.withComponent('nav');
Col.aside = Col.withComponent('aside');
Col.main = Col.withComponent('main');
Col.header = Col.withComponent('header');
Col.footer = Col.withComponent('footer');
Col.section = Col.withComponent('section');

export default Col;
