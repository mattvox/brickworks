import Grid from './Grid';

// prettier-ignore
export const Row = Grid.extend`
  flex: 0 1 100%;
  flex-wrap: ${({ fwrap }) => fwrap || 'wrap'};
  flex-direction: ${({ direction }) => direction || 'inherit'};
  justify-content: ${({ justifyContent }) => justifyContent || 'inherit'};
  align-content: ${({ alignContent }) => alignContent || 'inherit'};
  align-items: ${({ alignItems }) => alignItems || 'inherit'};
`;

export default Row;
