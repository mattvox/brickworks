import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import getElementType from '../utils/getElementType';
import applyCssWithUnit from '../utils/applyCssWithUnit';
import cssWithUnitPropType from '../utils/validators/cssWithUnitPropType';

// prettier-ignore
export const gridStyles = css`
  display: flex;
  flex-wrap: ${({ fwrap }) => fwrap || 'nowrap'};
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-content: ${({ alignContent }) => alignContent || 'stretch'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};

  ${({ flow }) => flow && css`
    flex-flow: flow;
  `}

  ${({ columns }) => columns && css`
    > .brickworks-col {
      flex: 0 1 ${100 / columns}%;
    }

    > .brickworks-box {
      flex: 0 1 ${100 / columns}%;
    }
  `}
`;

// prettier-ignore
export const Grid = styled.div`
  ${gridStyles}
  flex-wrap: ${({ fwrap }) => fwrap || 'wrap'};
  padding: ${({ padding }) =>
    ((padding || padding === 0) && applyCssWithUnit(padding)) || 0};
  margin: ${({ margin }) =>
    ((margin || margin === 0) && applyCssWithUnit(margin)) || '1em'};
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

_Grid.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
};

Grid.propTypes = {
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
  padding: cssWithUnitPropType,
  margin: cssWithUnitPropType,
};

export default _Grid;
