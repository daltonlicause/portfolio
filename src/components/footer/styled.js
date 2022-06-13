import styled from 'styled-components';

export const FooterContainer = styled.div`
  padding: 20px;
  margin: auto 0 0 0;
  text-align: center;
  background: ${({ theme }) => theme.secondaryBackground};
  border-top: 2px solid ${({theme}) => theme.accent};

  h4 {
    font-weight: 400;
  }
  span {
    color: ${({ theme }) => theme.accent};
  }
`;