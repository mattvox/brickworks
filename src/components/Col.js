import styled, { css } from 'styled-components';

import applyCssWithUnit from '../utils/applyCssWithUnit';
import { gridStyles } from './Grid';
import { itemTypes } from './types';
import Layout from './Layout';

// prettier-ignore
const itemStyles = css`
  flex: 0 1 auto;
  box-sizing: border-box;
  border: 1px solid red;

  ${({ flex, grow, shrink, basis, order, align, grid }) => css`
    ${flex && css`
      flex: ${flex.grow} ${flex.shrink} ${applyCssWithUnit(flex.basis, '%')};
    `}

    ${grow && css`flex-grow: ${grow};`}
    ${shrink && css`flex-shrink: ${shrink};`}
    ${basis && css`flex-basis: ${basis};`}
    ${order && css`order: ${order};`}
    ${align && css`align-self: ${align};`}
    ${grid && gridStyles}
  `}
`;

// prettier-ignore
export const Col = styled(Layout).attrs({ className: 'brickworks' })`${itemStyles}`;

Col.propTypes = {
  ...itemTypes,
};

export default Col;

/* Additional props / will support? / function
* as - supported / renders component as another tag
* children - supported / allows passed children to be rendered
* textAlign - supported / sets text alignment of children
* className - supported / concat additional class names
* left - supported / sets margin auto
* right - supported / sets margin auto
* centered - supported / sets margin auto

* BREAKPOINTS SUPPORT
* computer - should support / rename
* largeScreen - should support / rename
* mobile - should support / rename
* only - should support / only renders at specific breakpoint
* tablet - should support / rename
* widescreen - should support / rename

* stretched - maybe / allows contents to take up entire height, align="stretch" is equal
* verticalAlign - maybe / renames align-self with more semantic names???
* width - maybe / can already do this with flex/flex-basis
* max-width - maybe / can already do this with flex/flex-basis mostly

* color - no support / allows row to be colored
*/
