import { css } from 'styled-components';

import applyCssWithUnit from '../../utils/applyCssWithUnit';

// prettier-ignore
export default css`
  flex: 0 1 auto;
  align-self: ${({ align }) => align || 'auto'};
  order: ${({ order }) => order || 0};

  ${({ grow }) => grow && css`
    flex-grow: ${grow};
  `};

  ${({ shrink }) => shrink && css`
    flex-grow: ${shrink};
  `};

  ${({ basis }) => basis && css`
    flex-basis: ${applyCssWithUnit(basis, '%')};
  `};

  ${({ flex }) => flex && css`
    flex: ${flex.grow} ${flex.shrink} ${applyCssWithUnit(flex.basis, '%')};
  `};
`;
