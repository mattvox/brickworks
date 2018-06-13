import styled, { css } from 'styled-components';

import applyCssWithUnit from '../utils/applyCssWithUnit';
import { layoutTypes } from './types';

// prettier-ignore
const Layout = styled.div.attrs({ className: ({ className }) => className || '' })`
  box-sizing: border-box;
  ${({
    textAlign,
    left,
    right,
    centered,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
  }) => css`
    ${textAlign && css`text-align: ${textAlign};`}
    ${minWidth && css`min-width: ${applyCssWithUnit(minWidth)};`}
    ${maxWidth && css`max-width: ${applyCssWithUnit(maxWidth)};`}
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
