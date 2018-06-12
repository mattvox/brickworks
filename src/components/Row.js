import Grid from './Grid';

// prettier-ignore
export const Row = Grid.extend`
  flex: 0 1 100%;
  flex-flow: ${({ flow }) => flow || 'inherit'};
  justify-content: ${({ justify }) => justify || 'inherit'};
  align-content: ${({ align }) => align || 'inherit'};
  align-items: ${({ items }) => items || 'inherit'};
  order: ${({ order }) => order || 0};
`;

export default Row;
