import styled from 'styled-components';
import Grid from './Grid';

// prettier-ignore
export const Row = styled(Grid)`
  flex: 0 1 100%;
  flex-wrap: ${({ fwrap }) => fwrap || 'wrap'};
  flex-direction: ${({ direction }) => direction || 'inherit'};
  justify-content: ${({ justifyContent }) => justifyContent || 'inherit'};
  align-content: ${({ alignContent }) => alignContent || 'inherit'};
  align-items: ${({ alignItems }) => alignItems || 'inherit'};
`;

export default Row;

/* Additional props / will support? / function
* as - supported / renders el as another tag
* children - supported / allows passed children to be rendered
* columns - supported / create columns, actually sets flex/flex-basis
* textAlign - supported / sets text alignment of children
* className - supported / concat additional class names
* left - supported / sets margin auto
* right - supported / sets margin auto
* centered - supported / sets margin auto

* BREAKPOINTS SETTINGS ONLY
* only - should support / only renders at specific breakpoint

* stretched - maybe / allows contents to take up entire grid height
* verticalAlign - maybe / renames align-items or align-content???

* color - no support / allows row to be colored
* divided - no support / places dividers in between columns
* reversed - no support / allows items to reverse order at certain breakpoints
*/
