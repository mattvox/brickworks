import { css } from 'styled-components';

import applyCssWithUnit from '../../utils/applyCssWithUnit';

// prettier-ignore
export default css`
  ${({ padding }) => padding && css`padding: ${applyCssWithUnit(padding)}`}
  ${({ paddingTop }) => paddingTop && css`padding-top: ${applyCssWithUnit(paddingTop)}`}
  ${({ paddingRight }) => paddingRight && css`padding-right: ${applyCssWithUnit(paddingRight)}`}
  ${({ paddingBottom }) => paddingBottom && css`padding-bottom: ${applyCssWithUnit(paddingBottom)}`}
  ${({ paddingLeft }) => paddingLeft && css`padding-left: ${applyCssWithUnit(paddingLeft)}`}
  ${({ margin }) => margin && css`margin: ${applyCssWithUnit(margin)}`}
  ${({ marginTop }) => marginTop && css`margin-top: ${applyCssWithUnit(marginTop)}`}
  ${({ marginRight }) => marginRight && css`margin-right: ${applyCssWithUnit(marginRight)}`}
  ${({ marginBottom }) => marginBottom && css`margin-bottom: ${applyCssWithUnit(marginBottom)}`}
  ${({ marginLeft }) => marginLeft && css`margin-left: ${applyCssWithUnit(marginLeft)}`}
  ${({ textAlign }) => textAlign && css`text-align: ${textAlign}`}
`;
