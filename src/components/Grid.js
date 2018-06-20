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

  ${({ padded, justify, columns, xs, sm, md, lg, xl, breakpoints, colFlex }) => css`
    ${colFlex && css`> .brckwrx-col { flex: ${applyFlex(colFlex, '%')}} `}
    ${padded && css`
      margin-top: 0;
      margin-bottom: 0;
      justify-content: ${justify || 'space-between'};

      :not(.brckwrx-row) :not(.brckwrx-col) {
        padding-top: calc(${applyCssWithUnit(padded, 'em') || '1em'} / 2);
        padding-bottom: calc(${applyCssWithUnit(padded, 'em') || '1em'} / 2);
        padding-left: ${applyCssWithUnit(padded, 'em') || '1em'};
        padding-right: ${applyCssWithUnit(padded, 'em') || '1em'};
      }

      > .brckwrx-col, > .brckwrx-row {
        margin-top: calc(${applyCssWithUnit(padded, 'em') || '1em'} / 2);
        margin-bottom: calc(${applyCssWithUnit(padded, 'em') || '1em'} / 2);
      }

      .brckwrx-grid & {
        margin-top: 0;
        margin-bottom: 0;
      }
    `}

    ${(columns || xs) && css`
      > .brckwrx-col {
        ${applyBasis(columns || xs, padded)};
      }
    `}

    ${sm && media(breakpoints).sm`
      > .brckwrx-col {
        ${applyBasis(sm, padded)};
      }
    `}

    ${md && media(breakpoints).md`
      > .brckwrx-col {
        ${applyBasis(md, padded)};
      }
    `}

    ${lg && media(breakpoints).lg`
      > .brckwrx-col {
        ${applyBasis(lg, padded)};
      }
    `}

    ${xl && media(breakpoints).xl`
      > .brckwrx-col {
        ${applyBasis(xl, padded)};
      }
    `}
  `};
`;

const applyBasis = (cols, padding) => {
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
