import { number, shape, oneOf, oneOfType } from 'prop-types';
import cssWithUnit from './custom/cssWithUnit';

export default {
  order: number,
  flex: oneOfType([
    number,
    shape({
      grow: number.isRequired,
      shrink: number,
      basis: cssWithUnit,
    }),
  ]),
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
