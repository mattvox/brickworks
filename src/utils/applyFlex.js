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
        flex: ${flex.grow} ${flex.shrink} ${applyCssWithUnit(flex.basis, '%')};
      `;
    default:
      return 0;
  }
}
