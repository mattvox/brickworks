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

    > .brickworks-box {
      flex: 0 1 ${100 / columns}%;
    }
  `}
`;
