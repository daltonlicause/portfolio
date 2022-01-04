import { createGlobalStyle } from 'styled-components';

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
  }

  #root {
    display: flex;
    flex-flow: column;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .purple {
    color: ${({theme}) => theme.purple};
  }

  .yellow {
    color: ${({theme}) => theme.yellow};
  }

  button,
  .button {
    cursor: pointer;
    padding: 10px 20px;
    margin: auto;
    border-radius: 4px;
    background: transparent;
    color: ${({theme}) => theme.link};
    border: 1px solid ${({theme}) => theme.link};
    transition: all .2s ease-in;
    &:hover {
      color: ${({theme}) => theme.mainBackground};
      background-color: ${({theme}) => theme.link};
    }
  }

  a {
    color: ${({theme}) => theme.link};
    transition: all .2s ease-in;
    &.purple {
      color: ${({theme}) => theme.purple};
    }
    &:not(.no-hover):hover {
      color: ${({theme}) => theme.mainBackground};
      background: ${({theme}) => theme.link};
      text-decoration: none;
      padding: 0 5px;
    }
  }

  .accent {
    color: ${({theme}) => theme.accent};
  }
`;