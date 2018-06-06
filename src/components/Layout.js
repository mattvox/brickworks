import styled from 'styled-components';

import { layoutStyles } from './styles';
import { layoutTypes } from './types';

// prettier-ignore
const Layout = styled.div`
  ${layoutStyles}
`;

Layout.propTypes = {
  ...layoutTypes,
};

export default Layout;
