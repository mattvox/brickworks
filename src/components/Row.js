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

Row.aside = Row.withComponent('aside');
Row.main = Row.withComponent('main');
Row.header = Row.withComponent('header');
Row.footer = Row.withComponent('footer');
Row.nav = Row.withComponent('nav');
Row.section = Row.withComponent('section');

export default Row;
