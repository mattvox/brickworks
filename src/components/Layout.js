import styled, { css } from 'styled-components';

import applyCssWithUnit from '../utils/applyCssWithUnit';
import { layoutTypes } from './types';

// prettier-ignore
const Layout = styled.div`
  ${({
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    textAlign,
    left,
    right,
    centered,
  }) => css`
    ${padding && css`padding: ${applyCssWithUnit(padding)};`}
    ${paddingTop && css`paddingTop: ${applyCssWithUnit(paddingTop)};`}
    ${paddingRight && css`paddingRight: ${applyCssWithUnit(paddingRight)};`}
    ${paddingBottom && css`paddingBottom: ${applyCssWithUnit(paddingBottom)};`}
    ${paddingLeft && css`paddingLeft: ${applyCssWithUnit(paddingLeft)};`}
    ${margin && css`margin: ${applyCssWithUnit(margin)};`}
    ${marginTop && css`marginTop: ${applyCssWithUnit(marginTop)};`}
    ${marginRight && css`marginRight: ${applyCssWithUnit(marginRight)};`}
    ${marginBottom && css`marginBottom: ${applyCssWithUnit(marginBottom)};`}
    ${marginLeft && css`marginLeft: ${applyCssWithUnit(marginLeft)};`}
    ${textAlign && css`textAlign: ${textAlign};`}
    ${left && css`margin-right: auto;`}
    ${right && css`margin-left: auto;`}
    ${centered && css`margin-left: auto; margin-right: auto;`}
  `}
`;

Layout.propTypes = {
  ...layoutTypes,
};

export default Layout;
