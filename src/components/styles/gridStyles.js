import { css } from 'styled-components';

// prettier-ignore
export default css`
  display: flex;
  flex-wrap: ${({ fwrap }) => fwrap || 'nowrap'};
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-content: ${({ alignContent }) => alignContent || 'stretch'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};

  ${({ flow }) => flow && css`
    flex-flow: flow;
  `}

  ${({ columns }) => columns && css`
    > .brickworks-col {
      flex: 0 1 ${100 / columns}%;
    }

    > .brickworks-brick {
      flex: 0 1 ${100 / columns}%;
    }
  `}

  ${({ sm }) => sm && css`
    @media screen and (min-width: 576px) {
      > .brickworks-col {
        flex: 0 1 ${100 / sm}%;
      }

      > .brickworks-brick {
        flex: 0 1 ${100 / sm}%;
      }
    }
  `}

  ${({ md }) => md && css`
    @media screen and (min-width: 768px) {
      > .brickworks-col {
        flex: 0 1 ${100 / md}%;
      }

      > .brickworks-brick {
        flex: 0 1 ${100 / md}%;
      }
    }
  `}

  ${({ lg }) => lg && css`
    @media screen and (min-width: 992px) {
      > .brickworks-col {
        flex: 0 1 ${100 / lg}%;
      }

      > .brickworks-brick {
        flex: 0 1 ${100 / lg}%;
      }
    }
  `}

  ${({ xl }) => xl && css`
    @media screen and (min-width: 1200px) {
      > .brickworks-col {
        flex: 0 1 ${100 / xl}%;
      }

      > .brickworks-brick {
        flex: 0 1 ${100 / xl}%;
      }
    }
  `}
`;
