import { bool, oneOf } from 'prop-types';
import cssWithUnit from './custom/cssWithUnit';

export default {
  padding: cssWithUnit,
  paddingTop: cssWithUnit,
  paddingRight: cssWithUnit,
  paddingBottom: cssWithUnit,
  paddingLeft: cssWithUnit,
  margin: cssWithUnit,
  marginTop: cssWithUnit,
  marginRight: cssWithUnit,
  marginBottom: cssWithUnit,
  marginLeft: cssWithUnit,
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
};
