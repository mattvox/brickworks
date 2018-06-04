import applyCssWithUnit from '../utils/applyCssWithUnit';
import Grid from './Grid';

export default Grid.extend`
  flex: 0 1 100%;
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  flex-direction: ${({ direction }) => direction || 'inherit'};
  justify-content: ${({ justifyContent }) => justifyContent || 'inherit'};
  align-content: ${({ alignContent }) => alignContent || 'inherit'};
  align-items: ${({ alignItems }) => alignItems || 'inherit'};
  padding: ${({ padding }) => (padding && applyCssWithUnit(padding)) || 0};
  margin: ${({ margin }) => (margin && applyCssWithUnit(margin)) || 0};
`;
