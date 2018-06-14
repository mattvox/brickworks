import styled, { css } from 'styled-components';

import applyFlex from '../utils/applyFlex';
import { colTypes, baseTypes } from './types';
import { gridStyles } from './Grid';
import { baseStyles } from './Base';

// prettier-ignore
export const Col = styled.div.attrs({ className: `brckwrx-col` })`
  ${baseStyles}
  flex: ${({ flex }) => applyFlex(flex) || '0 1 auto'};
  ${({ order, alignSelf, grid }) => css`
    ${order && css`order: ${order};`}
    ${alignSelf && css`align-self: ${alignSelf};`}
    ${grid && gridStyles}
    ${grid && css`padding-top: 0 !important;padding-left: 0 !important;`}
  `}
`;

Col.propTypes = {
  ...baseTypes,
  ...colTypes,
};

Col.nav = Col.withComponent('nav');
Col.aside = Col.withComponent('aside');
Col.main = Col.withComponent('main');
Col.header = Col.withComponent('header');
Col.footer = Col.withComponent('footer');
Col.section = Col.withComponent('section');

export default Col;
