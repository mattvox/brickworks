import { css } from 'styled-components';

import applyFlex from '../utils/applyFlex';
import { gridStyles } from './Grid';
import { itemTypes } from './types';
import Layout from './Layout';

// prettier-ignore
export const Col = Layout.extend`
  flex: 0 1 auto;
  ${({ flex, grow, shrink, basis, order, align, grid }) => css`
    ${flex && applyFlex(flex)}
    ${grow && css`flex-grow: ${grow};`}
    ${shrink && css`flex-shrink: ${shrink};`}
    ${basis && css`flex-basis: ${basis};`}
    ${order && css`order: ${order};`}
    ${align && css`align-self: ${align};`}
    ${grid && gridStyles}
  `}
`;

Col.propTypes = {
  ...itemTypes,
};

export default Col;
