import { css } from 'styled-components';

export default breakpoints =>
  Object.keys(breakpoints).reduce((obj, size) => {
    obj[size] = (...args) => css`
      @media screen and (min-width: ${breakpoints[size]}) {
        ${css(...args)};
      }
    `;
    return obj;
  }, {});
