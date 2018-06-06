import composeComponent from '../utils/composeComponent';
import { gridStyles, itemStyles } from './styles';
import { itemTypes } from './types';
import Layout from './Layout';

// prettier-ignore
export const Col = Layout.extend`
  ${itemStyles}
  ${({ grid }) => grid && gridStyles};
`;

Col.propTypes = {
  ...itemTypes,
};

const ComposedCol = composeComponent(Col, 'Col');

// ComposedCol.defaultProps = {
//   displayName: 'col',
// };

export default ComposedCol;

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
