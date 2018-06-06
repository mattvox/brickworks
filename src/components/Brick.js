import composeComponent from '../utils/composeComponent';
import { gridStyles, itemStyles, layoutStyles } from './styles';
import { gridTypes, itemTypes, layoutTypes } from './types';
import Layout from './Layout';

// prettier-ignore
const Brick = Layout.extend`
  ${layoutStyles}
  ${({ grid }) => grid && gridStyles};
  ${({ item }) => item && itemStyles};
`;

Brick.propTypes = {
  ...layoutTypes,
  ...gridTypes,
  ...itemTypes,
};

const ComposedBrick = composeComponent(Brick);

ComposedBrick.defaultProps = {
  displayName: 'brick',
};

export default ComposedBrick;
