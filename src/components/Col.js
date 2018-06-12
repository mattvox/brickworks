import { css } from 'styled-components';

import applyFlex from '../utils/applyFlex';
import applyCssWithUnit from '../utils/applyCssWithUnit';
import { gridStyles } from './Grid';
import { itemTypes } from './types';
import Layout from './Layout';

// prettier-ignore
export const Col = Layout.extend`
  flex: 0 1 auto;
  ${({ flex, grow, shrink, basis, order, alignSelf, grid }) => css`
    ${flex && applyFlex(flex)}
    ${grow && css`flex-grow: ${grow};`}
    ${shrink && css`flex-shrink: ${shrink};`}
    ${basis && css`flex-basis: ${applyCssWithUnit(basis, '%')};`}
    ${order && css`order: ${order};`}
    ${alignSelf && css`align-self: ${alignSelf};`}
    ${grid && gridStyles}
    ${grid && css`padding-top: 0 !important; padding-left: 0 !important`}
  `}
`;

Col.propTypes = {
  ...itemTypes,
};

export default Col;
