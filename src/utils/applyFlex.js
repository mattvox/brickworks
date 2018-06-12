import { css } from 'styled-components';
import applyCssWithUnit from './applyCssWithUnit';

export default function(flex) {
  switch (typeof flex) {
    case 'number':
      return css`
        flex: ${flex};
      `;
    case 'object':
      return css`
        flex: ${flex.grow || 0} ${flex.shrink || 1}
          ${applyCssWithUnit(flex.basis, '%') || 'auto'};
      `;
    default:
      return 0;
  }
}
