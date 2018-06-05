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
