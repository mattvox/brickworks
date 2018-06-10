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

  ${({ flow, columns, xs, sm, md, lg, xl }) => css`
    ${flow && css`flex-flow: ${flow};`}

    ${columns && css`
      > ${Col} {
        flex: 0 1 ${100 / columns}%;
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

export default Grid;

/* Additional props / will support? / function

*** TODO
*** Change Layout to Brick, it should be exported,
*** as a basic Layout building block component

*** TODO
*** Change current Brick back to Box, or Flexbox for
*** component name

*** TODO
*** Remove extend and replace with styled() in all places,
*** extend being deprecated and removed in future builds

* children - supported / allows passed children to be rendered
* columns - supported / create columns, actually sets flex/flex-basis
* textAlign - supported / sets text alignment of children
* className - supported / concat additional class names
* left - supported / sets margin auto
* right - supported / sets margin auto
* centered - supported / sets margin auto

* CONTAINER SETTINGS ONLY
* container - supported / wrapper that allows for width, max-width, etc

* BREAKPOINTS SETTINGS ONLY
* doubling - maybe / doubles item/col width on smaller screens
* stackable - maybe / stacks items when reaching mobile breakpoints

* padded - maybe, needs investigation / shortcuts multiple settings
* relaxed - maybe, needs investigation / might just be space-between
* stretched - maybe / allows contents to take up entire grid height
* verticalAlign - maybe / renames align-items, align-content with more semantic names???

* celled - no support / places dividers/borders on all children
* divided - no support / places dividers in between columns
* inverted - no support / inverts colors, which aren't supported
* reversed - no support / allows items to reverse order at certain breakpoints

* as - was supported, see notes / renders el as another tag
* - used component factory to return
*/
