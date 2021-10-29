import { createGlobalStyle } from 'styled-components';
import { colors } from './variables';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    background: ${({ theme }) => theme.mainBackground};
    color: ${({ theme }) => theme.text};
    font-family: "Fira Code", monospace;
    ${'' /* transition: all 0.25s linear; */}
  }

  #root {
    display: flex;
    flex-flow: column;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .purple {
    color: ${colors.purple};
  }

  .yellow {
    color: ${colors.yellow};
  }

  button,
  .button {
    cursor: pointer;
    padding: 10px 20px;
    margin: auto;
    border-radius: 4px;
    background: transparent;
    color: ${({theme}) => theme.accent};
    border: 1px solid ${({theme}) => theme.accent}
  }

  a {
    color: ${({theme}) => theme.accent};
    &.purple {
      color: ${colors.purple};
    }
  }

  .accent {
    color: ${({theme}) => theme.accent};
  }
`;