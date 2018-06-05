import React from 'react';
import PropTypes from 'prop-types';

import getElementType from '../utils/getElementType';
import { Grid } from './Grid';

// prettier-ignore
export const Row = Grid.extend`
  flex: 0 1 100%;
  flex-wrap: ${({ fwrap }) => fwrap || 'nowrap'};
  flex-direction: ${({ direction }) => direction || 'inherit'};
  justify-content: ${({ justifyContent }) => justifyContent || 'inherit'};
  align-content: ${({ alignContent }) => alignContent || 'inherit'};
  align-items: ${({ alignItems }) => alignItems || 'inherit'};
`;

const _Row = props => {
  const { as, children, ...rest } = props;
  const Element = Row.withComponent(getElementType(_Row, props));
  return (
    <Element className="brickworks-row" {...rest}>
      {children}
    </Element>
  );
};

/* Additional props / will support? / function
* as - supported / renders el as another tag
* children - supported / allows passed children to be rendered
* columns - supported / create columns, actually sets flex/flex-basis

* centered - should support / shortcuts multiple settings
* className - should support / concat additional class names
* only - should support / only renders at specific breakpoint
* textAlign - should support / sets text alignment of children

* stretched - maybe / allows contents to take up entire grid height
* verticalAlign - maybe / renames align-items or align-content???

* color - no support / allows row to be colored
* divided - no support / places dividers in between columns
* reversed - no support / allows items to reverse order at certain breakpoints
*/

_Row.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
};

export default _Row;
