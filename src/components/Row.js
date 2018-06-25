import styled, { css } from 'styled-components';

import media from '../utils/mediaTemplate';
import { gridTypes, baseTypes } from './types';
import { gridStyles } from './Grid';
import { baseStyles } from './Base';

// prettier-ignore
const Row = styled.div.attrs({ className: `brckwrx-row` })`
  ${baseStyles}
  flex: 0 1 100%;
  order: ${({ order }) => order || 0};
  ${gridStyles}

  ${({ theme, columns, xs, sm, md, lg, xl, breakpoints }) => css`
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
  `};
`;

Row.propTypes = {
  ...gridTypes,
  ...baseTypes,
};

Row.nav = Row.withComponent('nav');
Row.aside = Row.withComponent('aside');
Row.main = Row.withComponent('main');
Row.header = Row.withComponent('header');
Row.footer = Row.withComponent('footer');
Row.section = Row.withComponent('section');

export default Row;
