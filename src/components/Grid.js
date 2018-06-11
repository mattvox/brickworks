import styled, { css } from 'styled-components';

import { gridTypes } from './types';
import Layout from './Layout';
import Col from './Col';

// prettier-ignore
export const gridStyles = css`
  display: flex;
  flex-wrap: ${({ fwrap }) => fwrap || 'nowrap'};
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-content: ${({ alignContent }) => alignContent || 'stretch'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};

  ${({ flow, padded, columns, xs, sm, md, lg, xl }) => css`
    ${flow && css`flex-flow: ${flow};`}

    ${padded && css`
      padding-right: 1em;
      padding-bottom: 1em;
      & ${Col} {
        padding: 1em 0 0 1em;
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
      @media screen and (min-width: 576px) {
        > ${Col} {
          flex: 0 1 ${100 / sm}%;
        }
      }
    `}

    ${md && css`
      @media screen and (min-width: 768px) {
        > ${Col} {
          flex: 0 1 ${100 / md}%;
        }
      }
    `}

    ${lg && css`
      @media screen and (min-width: 992px) {
        > ${Col} {
          flex: 0 1 ${100 / lg}%;
        }
      }
    `}

    ${xl && css`
      @media screen and (min-width: 1200px) {
        > ${Col} {
          flex: 0 1 ${100 / xl}%;
        }
      }
    `}
  `}
`;

// prettier-ignore
const Grid = styled(Layout)`
  ${gridStyles}
  flex-wrap: ${({ fwrap }) => fwrap || 'wrap'};
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
