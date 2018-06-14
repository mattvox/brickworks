import { number, oneOf, oneOfType, arrayOf } from 'prop-types';
import flexWithArray from './custom/flexWithArray';

export default {
  order: number,
  flex: oneOfType([number, arrayOf(flexWithArray)]),
  alignSelf: oneOf([
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
