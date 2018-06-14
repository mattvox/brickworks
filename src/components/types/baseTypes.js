import { bool, oneOf } from 'prop-types';
import cssWithUnit from './custom/cssWithUnit';

// add custom prop type allowing sm, md, lg, etc to be passed for width/height

export default {
  textAlign: oneOf([
    'left',
    'right',
    'center',
    'justify',
    'initial',
    'inherit',
  ]),
  left: bool,
  right: bool,
  centered: bool,
  maxWidth: cssWithUnit,
  minWidth: cssWithUnit,
  maxHeight: cssWithUnit,
  minHeight: cssWithUnit,
};
