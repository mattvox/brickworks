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

  ${({ flex }) => flex && css`
    flex: ${flex.grow} ${flex.shrink} ${applyCssWithUnit(flex.basis, '%')};
  `};
`;

export default Col;

// maybe allow columns to also be flex containers by passing in the 'grid' prop, should have access to columns (and rows maybe) and all other grid props

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
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
