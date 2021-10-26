import styled from 'styled-components';

export const FooterContainer = styled.div`
  padding: 40px 0;
  margin: auto 0 0 0;
  text-align: center;
  background: ${({ theme }) => theme.secondaryBackground};

  span {
    color: ${({ theme }) => theme.accent};
  }
`;