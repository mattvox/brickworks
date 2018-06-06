import React from 'react';
import PropTypes from 'prop-types';

import getElementType from '../utils/getElementType';
import { gridStyles, itemStyles } from './styles';
import { itemTypes } from './types';
import wrapper from './hoc/wrapper';
import Layout from './Layout';

// prettier-ignore
export const Col = Layout.extend`
  ${itemStyles}

  ${({ grid }) => grid && gridStyles};
`;

const _Col = props => {
  const { as, children, ...rest } = props;
  const Element = Col.withComponent(getElementType(_Col, props));
  return (
    <Element className="brickworks-col" {...rest}>
      {children}
    </Element>
  );
};

export default wrapper(Col);

// const Wrapper = Component => props => {
//   const { as, children, ...rest } = props;
//   const Element = Component.withComponent(getElementType(Component, props));
//   return (
//     <Element className="brickworks-col" {...rest}>
//       {children}
//     </Element>
//   );
// };

// export default Wrapper(Col);

/* Additional props / will support? / function
* as - supported / renders el as another tag
* children - supported / allows passed children to be rendered

* className - should support / concat additional class names
* computer - should support / rename
* largeScreen - should support / rename
* mobile - should support / rename
* only - should support / only renders at specific breakpoint
* tablet - should support / rename
* textAlign - should support / sets text alignment of children
* widescreen - should support / rename

* floated - maybe / enums - left, right / already supported by flex/justify/align
* stretched - maybe / allows contents to take up entire grid height
* verticalAlign - maybe / renames align-items or align-content???
* width - maybe / can already do this with flex/flex-basis

* color - no support / allows row to be colored
*/

_Col.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
};

Col.propTypes = {
  ...itemTypes,
};

// export default _Col;
