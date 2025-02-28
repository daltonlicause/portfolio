import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 20px;
  margin: auto 0 0 0;
  text-align: center;
  background: ${({ theme }) => theme.secondaryBackground};
  border-top: 2px solid ${({theme}) => theme.accent};

  p {
    font-weight: 400;
    span {
      color: ${({ theme }) => theme.accent};
    }
  }

  .navigation {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    width: auto;
    max-width: 100%;
    margin: 0 auto;
  }
`;