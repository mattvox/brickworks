import React from 'react';
import { string, node } from 'prop-types';

import getElementType from './getElementType';

export default function(Component, name = 'Brick') {
  const Composed = props => {
    const { as, children, className, ...rest } = props;
    // prettier-ignore
    const classes = `brickworks-${name.toLowerCase()} ${className || ''}`.trim();
    const Element = Component.withComponent(getElementType(Component, props));

    return (
      <Element className={classes} {...rest}>
        {children}
      </Element>
    );
  };

  Composed.displayName = name;
  Composed.propTypes = {
    as: string,
    children: node,
    className: string,
  };

  return Composed;
}
