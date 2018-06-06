import React from 'react';
import PropTypes from 'prop-types';

import getElementType from '../../utils/getElementType';

// const Wrapper = Component => props => {
//   const { as, children, ...rest } = props;
//   const Element = Component.withComponent(getElementType(Component, props));

//   // PropTypes = {
//   //   as: PropTypes.string,
//   //   children: PropTypes.node,
//   // };

//   return (
//     <Element className="brickworks-col" {...rest}>
//       {children}
//     </Element>
//   );
// };

const wrapper = Component => {
  const Wrapped = props => {
    const { as, children, ...rest } = props;
    const Element = Component.withComponent(getElementType(Component, props));
    return (
      <Element className="brickworks-col" {...rest}>
        {children}
      </Element>
    );
  };

  Wrapped.propTypes = { as: PropTypes.string, children: PropTypes.node };
  return Wrapped;
};

export default wrapper;
