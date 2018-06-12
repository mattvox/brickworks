import { css } from 'styled-components';

import { gridTypes } from './types';
import Layout from './Layout';
import Col from './Col';

// prettier-ignore
export const gridStyles = css`
  display: flex;
  flex-flow: ${({ flow }) => flow || 'row wrap'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-content: ${({ align }) => align || 'stretch'};
  align-items: ${({ items }) => items || 'stretch'};

  ${({ flow, padded, columns, xs, sm, md, lg, xl, breakpoints }) => css`
    ${flow && css`flex-flow: ${flow};`}

    ${padded && css`
      padding-right: 1em;
      padding-bottom: 1em;
      & ${Col} {
        padding-top: 1em;
        padding-left: 1em;
      }
      > ${Grid} {
        padding-right: 0;
      }
      not:${Grid} & {
        padding-bottom: 0;
      }
    `}

    ${(columns || xs) && css`
      > ${Col} {
        flex: 0 1 ${100 / (columns || xs)}%;
      }
    `}

    ${xs && css`
      > ${Col} {
        flex: 0 1 ${100 / xs}%;
      }
    `}

    ${sm && css`
      @media screen and (min-width: ${breakpoints.sm}) {
        > ${Col} {
          flex: 0 1 ${100 / sm}%;
        }
      }
    `}

    ${md && css`
      @media screen and (min-width: ${breakpoints.md}) {
        > ${Col} {
          flex: 0 1 ${100 / md}%;
        }
      }
    `}

    ${lg && css`
      @media screen and (min-width: ${breakpoints.lg}) {
        > ${Col} {
          flex: 0 1 ${100 / lg}%;
        }
      }
    `}

    ${xl && css`
      @media screen and (min-width: ${breakpoints.xl}) {
        > ${Col} {
          flex: 0 1 ${100 / xl}%;
        }
      }
    `}
  `}
`;

// prettier-ignore
const Grid = Layout.extend`
  ${gridStyles}
`;

Grid.propTypes = {
  ...gridTypes,
};

Grid.defaultProps = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

export default Grid;
