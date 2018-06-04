import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import applyCssWithUnit from '../utils/applyCssWithUnit';
import cssWithUnitPropType from '../utils/validators/cssWithUnitPropType';

import Col from './Col';

// prettier-ignore
const Grid = styled.div`
  display: flex;
  flex-wrap: ${({ wrap }) => wrap || 'wrap'};
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-content: ${({ alignContent }) => alignContent || 'stretch'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  padding: ${({ padding }) => (padding && applyCssWithUnit(padding)) || 0};
  margin: ${({ margin }) => (margin && applyCssWithUnit(margin)) || '1em'};

  ${({ flow }) => flow && css`
    flex-flow: flow;
  `}

  ${({ columns }) => columns && css`
    > ${Col} {
      flex: 0 1 ${100 / columns}%;
    }
  `}
`;

Grid.propTypes = {
  columns: PropTypes.number,
  wrap: PropTypes.oneOf([
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

export default Grid;
