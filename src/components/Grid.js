import styled, { css } from 'styled-components';

import media from '../utils/mediaTemplate';
import applyCssWithUnit from '../utils/applyCssWithUnit';
import { gridTypes, baseTypes } from './types';
import { baseStyles } from './Base';

// prettier-ignore
export const gridStyles = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  ${({
    theme,
    spacing,
    columns,
    xs,
    sm,
    md,
    lg,
    xl,
    breakpoints,
    flow,
    justify,
    alignContent,
    alignItems,
    noSpacing,
  }) => css`
    ${(theme.flow || flow) && css`flex-flow: ${theme.flow || flow};`}
    ${(theme.justify || justify) && css`justify-content: ${theme.justify || justify};`}
    ${(theme.alignContent || alignContent) && css`align-content: ${theme.alignContent || alignContent};`}
    ${(theme.alignItems || alignItems) && css`align-items: ${theme.alignItems || alignItems};`}
    
    ${(columns || xs) && css`
      > .brckwrx-col {flex-basis: ${100 / (columns || xs)}%;}
    `}

    ${sm && media(theme.breakpoints || breakpoints).sm`
      > .brckwrx-col {flex-basis: ${100 / sm}%;}
    `}

    ${md && media(theme.breakpoints || breakpoints).md`
      > .brckwrx-col {flex-basis: ${100 / md}%;}
    `}

    ${lg && media(theme.breakpoints || breakpoints).lg`
      > .brckwrx-col {flex-basis: ${100 / lg}%;}
    `}
    
    ${xl && media(theme.breakpoints || breakpoints).xl`
      > .brckwrx-col {flex-basis: ${100 / xl}%;}
    `}

    ${(theme.noSpacing || noSpacing) || css`
      :not(.brckwrx-row) :not(.brckwrx-col) {
        padding-top: calc(${applyCssWithUnit(spacing || theme.spacing, 'em') || '1em'} / 2);
        padding-bottom: calc(${applyCssWithUnit(spacing || theme.spacing, 'em') || '1em'} / 2);
        
        .brckwrx-row {
          padding-left: calc(${applyCssWithUnit(spacing || theme.spacing, 'em') || '1em'} / 2);
          padding-right: calc(${applyCssWithUnit(spacing || theme.spacing, 'em') || '1em'} / 2);
        }

        .brckwrx-col {
          padding: calc(${applyCssWithUnit(spacing || theme.spacing, 'em') || '1em'} / 2);
        }
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

Grid.nav = Grid.withComponent('nav');
Grid.aside = Grid.withComponent('aside');
Grid.main = Grid.withComponent('main');
Grid.header = Grid.withComponent('header');
Grid.footer = Grid.withComponent('footer');
Grid.section = Grid.withComponent('section');

export default Grid;
