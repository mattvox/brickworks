import { gridStyles } from './Grid';
import { itemTypes } from './types';
import Layout from './Layout';

import { css } from 'styled-components';
import applyCssWithUnit from '../utils/applyCssWithUnit';

// prettier-ignore
export const Col = Layout.extend.attrs({ className: 'brickworks' })`
  flex: 0 1 auto;
  box-sizing: border-box;
  border: 1px solid red;

  ${({ flex }) => flex && css`
    flex: ${flex.grow} ${flex.shrink} ${applyCssWithUnit(flex.basis, '%')};
  `};

  ${({ grow }) => grow && css`
    flex-grow: ${grow};
  `};

  ${({ shrink }) => shrink && css`
    flex-grow: ${shrink};
  `};

  ${({ basis }) => basis && css`
    flex-basis: ${applyCssWithUnit(basis, '%')};
  `};

  ${({ order }) => order && css`
    order: ${order};
  `};  
  
  ${({ align }) => align && css`
    align-self: ${align}
  `};

  ${({ grid }) => grid && gridStyles};
`;

Col.propTypes = {
  ...itemTypes,
};

Col.section = Col.withComponent('section');

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
