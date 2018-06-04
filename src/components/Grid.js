import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import applyPaddingOrMargin from '../utils/applyPaddingOrMargin';
import Col from './Col';

const Grid = styled.div`
  display: flex;
  flex-wrap: ${({ wrap }) => wrap || 'wrap'};
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-content: ${({ alignContent }) => alignContent || 'stretch'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  padding: ${({ padding }) => (padding && applyPaddingOrMargin(padding)) || 0};
  margin: ${({ margin }) => (margin && applyPaddingOrMargin(margin)) || '1em'};

  ${({ flow }) =>
    flow &&
    css`
      flex-flow: flow;
    `}

  > ${Col} {
    flex: ${({ columns }) => (columns ? `0 1 ${100 / columns}%` : '1 1 auto')};
  }
`;

Grid.propTypes = {
  columns: PropTypes.number,
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
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
  ]),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
  ]),
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'stretch',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Grid;
