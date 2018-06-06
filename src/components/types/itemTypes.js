import { number, shape, oneOf } from 'prop-types';
import cssWithUnit from './custom/cssWithUnit';

export default {
  order: number,
  flex: shape({
    grow: number,
    shrink: number,
    basis: cssWithUnit,
  }),
  grow: number,
  shrink: number,
  basis: cssWithUnit,
  align: oneOf([
    'auto',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
    'initial',
    'inherit',
  ]),
};
