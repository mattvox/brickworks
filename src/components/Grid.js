import { css } from 'styled-components';

import applyCssWithUnit from '../utils/applyCssWithUnit';
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

         ${({ padded, columns, xs, sm, md, lg, xl, breakpoints }) => css`
    ${padded && css`
        padding-right: ${applyCssWithUnit(padded, 'em') || '1em'};
        padding-bottom: ${applyCssWithUnit(padded, 'em') || '1em'};
        ${Col} {
          padding-top: ${applyCssWithUnit(padded, 'em') || '1em'};
          padding-left: ${applyCssWithUnit(padded, 'em') || '1em'};}
        > ${Grid} {
          padding-right: 0;
        }
        not: ${Grid} & {padding-bottom: 0;}`}

    ${(columns || xs) && css`
        > ${Col} {
          flex: 0 1 ${100 / (columns || xs)}%;
        }`}

    ${xs && css`
        > ${Col} {
          flex: 0 1 ${100 / xs}%;
        }`}

    ${sm && css`
        @media screen and (min-width: ${breakpoints.sm}) {> ${Col} {
            flex: 0 1 ${100 / sm}%;
          }}`}

    ${md && css`
        @media screen and (min-width: ${breakpoints.md}) {> ${Col} {
            flex: 0 1 ${100 / md}%;
          }}`}

    ${lg && css`
        @media screen and (min-width: ${breakpoints.lg}) {> ${Col} {
            flex: 0 1 ${100 / lg}%;
          }}`}

    ${xl && css`
        @media screen and (min-width: ${breakpoints.xl}) {> ${Col} {
            flex: 0 1 ${100 / xl}%;
          }}`}
  `};`;

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

Grid.aside = Grid.withComponent('aside');
Grid.main = Grid.withComponent('main');
Grid.header = Grid.withComponent('header');
Grid.footer = Grid.withComponent('footer');
Grid.nav = Grid.withComponent('nav');
Grid.section = Grid.withComponent('section');

export default Grid;
