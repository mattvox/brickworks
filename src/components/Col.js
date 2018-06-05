import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import getElementType from '../utils/getElementType';
import applyCssWithUnit from '../utils/applyCssWithUnit';
import cssWithUnitPropType from '../utils/validators/cssWithUnitPropType';
import { gridStyles } from './Grid';

// prettier-ignore
export const itemStyles = css`
  flex: 0 1 auto;
  align-self: ${({ align }) => align || 'auto'};
  order: ${({ order }) => order || 0};

  ${({ grow }) => grow && css`
    flex-grow: ${grow};
  `};

  ${({ shrink }) => shrink && css`
    flex-grow: ${shrink};
  `};

  ${({ basis }) => basis && css`
    flex-basis: ${applyCssWithUnit(basis, '%')};
  `};

  ${({ flex }) => flex && css`
    flex: ${flex.grow} ${flex.shrink} ${applyCssWithUnit(flex.basis, '%')};
  `};
`;

// prettier-ignore
const Col = styled.div`
  ${itemStyles}
  padding: ${({ padding }) =>
    ((padding || padding === 0) && applyCssWithUnit(padding)) || '1em'};
  margin: ${({ margin }) =>
    ((margin || margin === 0) && applyCssWithUnit(margin)) || 0};

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

_Col.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
};

Col.propTypes = {
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

export default _Col;
