import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import getElementType from '../utils/getElementType';
import applyCssWithUnit from '../utils/applyCssWithUnit';
import cssWithUnitPropType from '../utils/validators/cssWithUnitPropType';
import { gridStyles } from './Grid';
import { itemStyles } from './Col';

// prettier-ignore
const Box = styled.div`
  padding: ${({ padding }) =>
    ((padding || padding === 0) && applyCssWithUnit(padding)) || 0};
  margin: ${({ margin }) =>
    ((margin || margin === 0) && applyCssWithUnit(margin)) || 0};

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
  columns: PropTypes.number,
  fwrap: PropTypes.oneOf([
    'nowrap',
    'wrap',
    'wrap-reverse',
    'initial',
    'inherit',
  ]),
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
    'initial',
    'inherit',
  ]),
  flow: PropTypes.oneOf([
    'row nowrap',
    'row wrap',
    'row wrap-reverse',
    'row-reverse nowrap',
    'row-reverse wrap',
    'row-reverse wrap-reverse',
    'column nowrap',
    'column wrap',
    'column wrap-reverse',
    'column-reverse nowrap',
    'column-reverse wrap',
    'column-reverse wrap-reverse',
    'initial',
    'inherit',
  ]),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'initial',
    'inherit',
  ]),
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'stretch',
    'initial',
    'inherit',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
    'initial',
    'inherit',
  ]),
  order: PropTypes.number,
  flex: PropTypes.shape({
    grow: PropTypes.number,
    shrink: PropTypes.number,
    basis: cssWithUnitPropType,
  }),
  grow: PropTypes.number,
  shrink: PropTypes.number,
  basis: cssWithUnitPropType,
  align: PropTypes.oneOf([
    'auto',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
    'initial',
    'inherit',
  ]),
  padding: cssWithUnitPropType,
  margin: cssWithUnitPropType,
};

export default _Box;
