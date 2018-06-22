import styled, { css } from 'styled-components';

import media from '../utils/mediaTemplate';
import applyFlex from '../utils/applyFlex';
import applyCssWithUnit from '../utils/applyCssWithUnit';
import breakpoints from '../utils/defaultBreakpoints';
import { gridTypes, baseTypes } from './types';
import { baseStyles } from './Base';

// remove unneeded defaults that are already default and use default props to set defaults,
// reducing lines of code.

// fix defaults and themes, themes should apply first, then props, but default props,
// currently override the themes, which is bad.

// prettier-ignore
export const gridStyles = css`
  display: flex;
  flex-flow: ${({ flow }) => flow || 'row wrap'};

  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-content: ${({ alignContent }) => alignContent || 'stretch'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};

  ${({ padded, theme, columns, xs, sm, md, lg, xl, breakpoints, colFlex }) => css`
    ${colFlex && css`> .brckwrx-col { flex: ${applyFlex(colFlex, '%')}} `}
    ${(padded || theme.padded) && css`
      :not(.brckwrx-row) :not(.brckwrx-col) {
        padding-top: ${applyCssWithUnit(padded || theme.padded, 'em') || '1em'};
        padding-left: ${applyCssWithUnit(padded || theme.padded, 'em') || '1em'};
      }

      .brckwrx-col {
        padding-right: ${applyCssWithUnit(padded || theme.padded, 'em') || '1em'};
        padding-bottom: ${applyCssWithUnit(padded || theme.padded, 'em') || '1em'};
      }
    `}

    ${(columns || xs) && css`
        > .brckwrx-col {
          flex-basis: ${100 / (columns || xs)}%;
        }
    `}
    ${sm && media(breakpoints || theme.breakpoints).sm`
      > .brckwrx-col {
        flex-basis: ${100 / sm}%;
      }
    `}
    ${md && media(breakpoints || theme.breakpoints).md`
      > .brckwrx-col {
        flex-basis: ${100 / md}%;
      }
    `}
    ${lg && media(breakpoints || theme.breakpoints).lg`
      > .brckwrx-col {
        flex-basis: ${100 / lg}%;
      }
    `}
    
    ${xl && media(breakpoints || theme.breakpoints).xl`
      > .brckwrx-col {
        flex-basis: ${100 / xl}%;
      }
    `}
  `};
`;

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
  // breakpoints: { ...breakpoints },
  padded: false,
};

Grid.nav = Grid.withComponent('nav');
Grid.aside = Grid.withComponent('aside');
Grid.main = Grid.withComponent('main');
Grid.header = Grid.withComponent('header');
Grid.footer = Grid.withComponent('footer');
Grid.section = Grid.withComponent('section');

export default Grid;
