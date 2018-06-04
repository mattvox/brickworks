import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import applyCssWithUnit from '../utils/applyCssWithUnit';
import cssWithUnitPropType from '../utils/validators/cssWithUnitPropType';

// prettier-ignore
const Col = styled.div`
  flex: 0 1 auto;
  align-self: ${({ align }) => align || 'auto'};
  order: ${({ order }) => order || 0};
  padding: ${({ padding }) => (padding && applyCssWithUnit(padding)) || '1em'};
  margin: ${({ margin }) => (margin && applyCssWithUnit(margin)) || 0};

  ${({ grow }) => grow && css`
    flex-grow: ${grow};
  `};

  ${({ shrink }) => shrink && css`
    flex-grow: ${shrink};
  `};

  ${({ basis }) => basis && css`
    flex-basis: ${applyCssWithUnit(basis, '%')};
  `};
`;

// flex - basis: ${
//   ({ basis }) =>
//   (basis && applyCssWithUnit(basis, '%')) || 'auto'
// };

export default Col;

// fix prop-type in flex and flex basis to take a percentage or change applyPadding function to applyUnits and take a second argument

// use shorthand, make array prop and validate total object/array in prop types
// maybe apply this to padding and margin as well, allow an array to be passed, or string, or number
// maybe allow columns to also be flex containers by passing in the 'grid' prop, should have access to columns (and rows maybe) and all other grid props

// const regex = /^(auto|0)$|^[+-]?[0-9]+.?([0-9]+)?(px|em|ex|%|in|cm|mm|pt|pc)$/i;

// const cssWithUnitPropType = (props, prop, component) => {
//   if (!isValid(props[prop])) {
//     return new Error(`Invalid prop ${prop} on ${component}`);
//   }

//   return null;
// };

Col.propTypes = {
  order: PropTypes.oneOf([PropTypes.number, 'initial', 'inherit']),
  flex: PropTypes.arrayOf(
    PropTypes.shape({
      grow: PropTypes.oneOf([PropTypes.number, 'initial', 'inherit']),
      shrink: PropTypes.oneOf([PropTypes.number, 'initial', 'inherit']),
      basis: cssWithUnitPropType,
    }),
  ),
  grow: PropTypes.oneOf([PropTypes.number, 'initial', 'inherit']),
  shrink: PropTypes.oneOf([PropTypes.number, 'initial', 'inherit']),
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
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
