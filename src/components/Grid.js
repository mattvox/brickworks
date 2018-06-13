import { css } from 'styled-components';

import applyCssWithUnit from '../utils/applyCssWithUnit';
import { gridTypes } from './types';
import Layout from './Layout';

import media from '../utils/mediaTemplate';

// prettier-ignore
export const gridStyles = css`
  display: flex;
  flex-flow: ${({ flow }) => flow || 'row wrap'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-content: ${({ align }) => align || 'stretch'};
  align-items: ${({ items }) => items || 'stretch'};

  ${({ childFlex }) => css`> .brckwrx-col {flex: ${childFlex}}`};

  ${({ padded, columns, xs, sm, md, lg, xl, breakpoints }) => css`
    ${padded && css`
      padding-right: ${applyCssWithUnit(padded, 'em') || '1em'};
      padding-bottom: ${applyCssWithUnit(padded, 'em') || '1em'};

      .brckwrx-col {
        padding-top: ${applyCssWithUnit(padded, 'em') || '1em'};
        padding-left: ${applyCssWithUnit(padded, 'em') || '1em'};
      }
    `}

    ${(columns || xs) && css`
      > .brckwrx-col {
        flex: 0 1 ${100 / (columns || xs)}%;
      }
    `}

    ${sm && media(breakpoints).sm`
      > .brckwrx-col {
        flex: 0 1 ${100 / sm}%;
      }
    `}

    ${md && media(breakpoints).md`
      > .brckwrx-col {
        flex: 0 1 ${100 / md}%;
      }
    `}

    ${lg && media(breakpoints).lg`
      > .brckwrx-col {
        flex: 0 1 ${100 / lg}%;
      }
    `}

    ${xl && media(breakpoints).xl`
      > .brckwrx-col {
        flex: 0 1 ${100 / xl}%;
      }
    `}
  `}
`;

// prettier-ignore
const Grid = Layout.extend.attrs({ className: `brckwrx-grid` })`
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

Grid.nav = Grid.withComponent('nav');
Grid.aside = Grid.withComponent('aside');
Grid.main = Grid.withComponent('main');
Grid.header = Grid.withComponent('header');
Grid.footer = Grid.withComponent('footer');
Grid.section = Grid.withComponent('section');

export default Grid;
