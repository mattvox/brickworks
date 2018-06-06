import { css } from 'styled-components';

import applyCssWithUnit from '../../utils/applyCssWithUnit';

// prettier-ignore
export default css`
  flex: 0 1 auto;

  ${({ flex }) => flex && css`
    flex: ${flex.grow} ${flex.shrink} ${applyCssWithUnit(flex.basis, '%')};
  `};

  ${({ grow }) => grow && css`
    flex-grow: ${grow};
  `};

  ${({ shrink }) => shrink && css`
    flex-grow: ${shrink};
  `};

  ${({ basis }) => basis && css`
    flex-basis: ${applyCssWithUnit(basis, '%')};
  `};

  ${({ order }) => order && css`
    order: ${order};
  `};  
  
  ${({ align }) => align && css`
    align-self: ${align}
  `}
`;
