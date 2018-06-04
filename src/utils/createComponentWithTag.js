import React from 'react';
import PropTypes from 'prop-types';

export default function(_Component, el) {
  const Wrapped = ({ as: tag = el || 'div', children, ...props }) => {
    Wrapped.propTypes = { as: PropTypes.string, children: PropTypes.node };
    const Component = _Component.withComponent(tag);
    return <Component {...props}>{children}</Component>;
  };

  return Wrapped;
}
