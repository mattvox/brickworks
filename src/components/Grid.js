import React from 'react';
import PropTypes from 'prop-types';

import getElementType from '../utils/getElementType';
import { gridStyles } from './styles';
import { gridTypes } from './types';
import Layout from './Layout';

// prettier-ignore
export const Grid = Layout.extend`
  ${gridStyles}
  flex-wrap: ${({ fwrap }) => fwrap || 'wrap'};
`;

const _Grid = props => {
  const { as, children, ...rest } = props;
  const Element = Grid.withComponent(getElementType(_Grid, props));
  return (
    <Element className="brickworks-grid" {...rest}>
      {children}
    </Element>
  );
};

const Wrapper = Component => props => {
  const { as, children, ...rest } = props;
  const Element = Component.withComponent(getElementType(Component, props));
  return (
    <Element className="brickworks-col" {...rest}>
      {children}
    </Element>
  );
};

export default Wrapper(Grid);

/* Additional props / will support? / function
* as - supported / renders el as another tag
* children - supported / allows passed children to be rendered
* columns - supported / create columns, actually sets flex/flex-basis

* centered - should support / shortcuts multiple settings
* className - should support / concat additional class names
* textAlign - should support / sets text alignment of children

* container - maybe, needs investigation / wrapper that allows for width, max-width, etc
* doubling - maybe / doubles item/col width on smaller screens
* padded - maybe, needs investigation / shortcuts multiple settings
* relaxed - maybe, needs investigation / might just be space-between
* stackable - maybe / stacks items when reaching mobile breakpoints
* stretched - maybe / allows contents to take up entire grid height
* verticalAlign - maybe / renames align-items or align-content???

* celled - no support / places dividers/borders on all children
* divided - no support / places dividers in between columns
* inverted - no support / inverts colors, which aren't supported
* reversed - no support / allows items to reverse order at certain breakpoints
*/

_Grid.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
};

Grid.PropTypes = {
  ...gridTypes,
};

// Grid.propTypes = {
//   columns: PropTypes.number,
//   fwrap: PropTypes.oneOf([
//     'nowrap',
//     'wrap',
//     'wrap-reverse',
//     'initial',
//     'inherit',
//   ]),
//   direction: PropTypes.oneOf([
//     'row',
//     'row-reverse',
//     'column',
//     'column-reverse',
//     'initial',
//     'inherit',
//   ]),
//   flow: PropTypes.oneOf([
//     'row nowrap',
//     'row wrap',
//     'row wrap-reverse',
//     'row-reverse nowrap',
//     'row-reverse wrap',
//     'row-reverse wrap-reverse',
//     'column nowrap',
//     'column wrap',
//     'column wrap-reverse',
//     'column-reverse nowrap',
//     'column-reverse wrap',
//     'column-reverse wrap-reverse',
//     'initial',
//     'inherit',
//   ]),
//   justifyContent: PropTypes.oneOf([
//     'flex-start',
//     'flex-end',
//     'center',
//     'space-between',
//     'space-around',
//     'initial',
//     'inherit',
//   ]),
//   alignContent: PropTypes.oneOf([
//     'flex-start',
//     'flex-end',
//     'center',
//     'space-between',
//     'space-around',
//     'stretch',
//     'initial',
//     'inherit',
//   ]),
//   alignItems: PropTypes.oneOf([
//     'flex-start',
//     'flex-end',
//     'center',
//     'baseline',
//     'stretch',
//     'initial',
//     'inherit',
//   ]),
// };

// export default _Grid;
