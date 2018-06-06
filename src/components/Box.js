import React from 'react';
import PropTypes from 'prop-types';

import getElementType from '../utils/getElementType';
import { gridStyles, itemStyles, layoutStyles } from './styles';
import Layout from './Layout';
import { gridTypes, itemTypes, layoutTypes } from './types';

// prettier-ignore
const Box = Layout.extend`
  ${layoutStyles}
  ${({ grid }) => grid && gridStyles};
  ${({ item }) => item && itemStyles};
`;

const _Box = props => {
  const { as, children, ...rest } = props;
  const Element = Box.withComponent(getElementType(_Box, props));
  return (
    <Element className="brickworks-box" {...rest}>
      {children}
    </Element>
  );
};

_Box.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
};

Box.propTypes = {
  ...layoutTypes,
  ...gridTypes,
  ...itemTypes,
};

export default _Box;
