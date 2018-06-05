import PropTypes from 'prop-types';
import styled from 'styled-components';

import cssWithUnitPropType from '../utils/validators/cssWithUnitPropType';
import { layoutStyles } from '../utils/styles';

// prettier-ignore
const Layout = styled.div`
  ${layoutStyles}
`;

Layout.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
};

Layout.propTypes = {
  padding: cssWithUnitPropType,
  paddingTop: cssWithUnitPropType,
  paddingRight: cssWithUnitPropType,
  paddingBottom: cssWithUnitPropType,
  paddingLeft: cssWithUnitPropType,
  margin: cssWithUnitPropType,
  marginTop: cssWithUnitPropType,
  marginRight: cssWithUnitPropType,
  marginBottom: cssWithUnitPropType,
  marginLeft: cssWithUnitPropType,
  textAlign: PropTypes.oneOf([
    'left',
    'right',
    'center',
    'justify',
    'initial',
    'inherit',
  ]),
};

export default Layout;
