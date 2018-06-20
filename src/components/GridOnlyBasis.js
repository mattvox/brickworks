import styled, { css } from 'styled-components';

import media from '../utils/mediaTemplate';
import applyFlex from '../utils/applyFlex';
import applyCssWithUnit from '../utils/applyCssWithUnit';
import breakpoints from '../utils/defaultBreakpoints';
import { gridTypes, baseTypes } from './types';
import { baseStyles } from './Base';

// prettier-ignore
export const gridStyles = css`
         display: flex;
         flex-flow: ${({ flow }) => flow || 'row wrap'};
         justify-content: ${({ justify }) => justify || 'flex-start'};
         align-content: ${({ alignContent }) => alignContent || 'stretch'};
         align-items: ${({ alignItems }) => alignItems || 'stretch'};

         ${({ padded, columns, xs, sm, md, lg, xl, breakpoints, colFlex }) => css`
    ${colFlex && css`> .brckwrx-col { flex: ${applyFlex(colFlex, '%')}} `}
    ${padded && css`
      justify-content: space-between;
      :not(.brckwrx-row) {
        padding-left: ${applyCssWithUnit(padded, 'em') || '1em'};
        padding-right: ${applyCssWithUnit(padded, 'em') || '1em'};
        padding-bottom: ${applyCssWithUnit(padded, 'em') || '1em'};
      }

      > .brckwrx-row {
        padding-top: ${applyCssWithUnit(padded, 'em') || '1em'};
      }

      :not(.brckwrx-row) > .brckwrx-col {
        padding-top: ${applyCssWithUnit(padded, 'em') || '1em'};
      }
    `}

    ${(columns || xs) && css`
        > .brckwrx-col {
          ${applyBasis(columns, padded)};
        }`}

    ${sm && media(breakpoints).sm`
      > .brckwrx-col {
        flex-basis: ${100 / sm}%;
      }
    `}

    ${md && media(breakpoints).md`
      > .brckwrx-col {
        flex-basis: ${100 / md}%;
      }
    `}

    ${lg && media(breakpoints).lg`
      > .brckwrx-col {
        flex-basis: ${100 / lg}%;
      }
    `}

    ${xl && media(breakpoints).xl`
      > .brckwrx-col {
        flex-basis: ${100 / xl}%;
      }
    `}
  `};`;

const applyBasis = (cols, padding) => {
  console.log(padding);
  const basis = 100 / cols;

  if (!padding) {
    return css`
      flex-basis: ${basis}%;
    `;
  }

  const gutterCount = cols - 1;
  const gutterSize =
    typeof padding !== 'boolean' ? `${padding}/${cols}` : `${1 / cols}em`;

  return css`
    flex-basis: calc(${basis}% - (${gutterCount} * ${gutterSize}));
  `;
};

// prettier-ignore
const Grid = styled.div.attrs({ className: `brckwrx-grid` })`
  ${baseStyles}
  ${gridStyles}
`;

Grid.propTypes = {
  ...gridTypes,
  ...baseTypes,
};

Grid.defaultProps = {
  breakpoints: { ...breakpoints },
};

Grid.nav = Grid.withComponent('nav');
Grid.aside = Grid.withComponent('aside');
Grid.main = Grid.withComponent('main');
Grid.header = Grid.withComponent('header');
Grid.footer = Grid.withComponent('footer');
Grid.section = Grid.withComponent('section');

export default Grid;
