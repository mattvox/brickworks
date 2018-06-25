import { css } from 'styled-components';
import defaultBreakpoints from './defaultBreakpoints';

export default (breakpoints = defaultBreakpoints) =>
  Object.keys(breakpoints).reduce((obj, size) => {
    obj[size] = (...args) => css`
      @media screen and (min-width: ${breakpoints[size]}) {
        ${css(...args)};
      }
    `;
    return obj;
  }, {});
