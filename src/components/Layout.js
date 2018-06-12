import styled, { css } from 'styled-components';

import applyCssWithUnit from '../utils/applyCssWithUnit';
import { layoutTypes } from './types';

// prettier-ignore
const Layout = styled.div.attrs({ className: ({ className }) => className || '' })`
  box-sizing: border-box;
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
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
  }) => css`
    ${padding && css`padding: ${applyCssWithUnit(padding)};`}
    ${paddingTop && css`padding-top: ${applyCssWithUnit(paddingTop)};`}
    ${paddingRight && css`padding-right: ${applyCssWithUnit(paddingRight)};`}
    ${paddingBottom && css`padding-bottom: ${applyCssWithUnit(paddingBottom)};`}
    ${paddingLeft && css`padding-left: ${applyCssWithUnit(paddingLeft)};`}
    ${margin && css`margin: ${applyCssWithUnit(margin)};`}
    ${marginTop && css`margin-top: ${applyCssWithUnit(marginTop)};`}
    ${marginRight && css`margin-right: ${applyCssWithUnit(marginRight)};`}
    ${marginBottom && css`margin-bottom: ${applyCssWithUnit(marginBottom)};`}
    ${marginLeft && css`margin-left: ${applyCssWithUnit(marginLeft)};`}
    ${textAlign && css`text-align: ${textAlign};`}
    ${width && css`width: ${applyCssWithUnit(width)};`}
    ${minWidth && css`min-width: ${applyCssWithUnit(minWidth)};`}
    ${maxWidth && css`max-width: ${applyCssWithUnit(maxWidth)};`}
    ${height && css`height: ${applyCssWithUnit(height)};`}
    ${minHeight && css`min-height: ${applyCssWithUnit(minHeight)};`}
    ${maxHeight && css`max-height: ${applyCssWithUnit(maxHeight)};`}
    ${left && css`margin-right: auto;`}
    ${right && css`margin-left: auto;`}
    ${centered && css`margin-left: auto;margin-right: auto;`}
  `};
`;

Layout.propTypes = {
  ...layoutTypes,
};

export default Layout;
