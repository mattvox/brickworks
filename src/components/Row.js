import React from 'react';
import PropTypes from 'prop-types';

import getElementType from '../utils/getElementType';
import applyCssWithUnit from '../utils/applyCssWithUnit';
import { Grid } from './Grid';

// prettier-ignore
const Row = Grid.extend`
  flex: 0 1 100%;
  flex-wrap: ${({ fwrap }) => fwrap || 'nowrap'};
  flex-direction: ${({ direction }) => direction || 'inherit'};
  justify-content: ${({ justifyContent }) => justifyContent || 'inherit'};
  align-content: ${({ alignContent }) => alignContent || 'inherit'};
  align-items: ${({ alignItems }) => alignItems || 'inherit'};
  padding: ${({ padding }) => (padding && applyCssWithUnit(padding)) || 0};
  margin: ${({ margin }) => (margin && applyCssWithUnit(margin)) || 0};
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

_Row.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
};

export default _Row;
