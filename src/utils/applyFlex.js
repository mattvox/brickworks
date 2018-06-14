import { css } from 'styled-components';
import applyCssWithUnit from './applyCssWithUnit';

export default function(flex) {
  switch (typeof flex) {
    case 'number':
      return css`
        ${flex};
      `;
    case 'object':
      if (Array.isArray(flex)) {
        return css`
          ${flex[0] || 0} ${flex[1] || 1} ${applyCssWithUnit(flex[2], '%') ||
          'auto'};
        `;
      } else {
        return 0;
      }
    default:
      return 0;
  }
}
