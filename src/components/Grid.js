import composeComponent from '../utils/composeComponent';
import { gridStyles } from './styles';
import { gridTypes } from './types';
import Layout from './Layout';

// prettier-ignore
export const Grid = Layout.extend`
  ${gridStyles}
  flex-wrap: ${({ fwrap }) => fwrap || 'wrap'};
`;

Grid.propTypes = {
  ...gridTypes,
};

const ComposedGrid = composeComponent(Grid, 'Grid');

ComposedGrid.defaultProps = {
  displayName: 'grid',
};

export default ComposedGrid;

/* Additional props / will support? / function

*** TODO
*** Change Layout to Brick, it should be exported,
*** as a basic Layout building block component

*** TODO
*** Change current Brick back to Box, or Flexbox for
*** component name

* as - supported / renders el as another tag
* children - supported / allows passed children to be rendered
* columns - supported / create columns, actually sets flex/flex-basis
* textAlign - supported / sets text alignment of children
* className - supported / concat additional class names
* left - supported / sets margin auto
* right - supported / sets margin auto
* centered - supported / sets margin auto

* CONTAINER SETTINGS ONLY
* container - supported / wrapper that allows for width, max-width, etc

* BREAKPOINTS SETTINGS ONLY
* doubling - maybe / doubles item/col width on smaller screens
* stackable - maybe / stacks items when reaching mobile breakpoints

* padded - maybe, needs investigation / shortcuts multiple settings
* relaxed - maybe, needs investigation / might just be space-between
* stretched - maybe / allows contents to take up entire grid height
* verticalAlign - maybe / renames align-items, align-content with more semantic names???

* celled - no support / places dividers/borders on all children
* divided - no support / places dividers in between columns
* inverted - no support / inverts colors, which aren't supported
* reversed - no support / allows items to reverse order at certain breakpoints
*/
