import styled from "styled-components";

export const SocialContainer = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;

  a {
    display: flex;
    color: ${({theme}) => theme.text};
    padding: 0 6px;
    margin: 0 2px;
    font-size: 22px;
    &:hover {
      color: ${({theme}) => theme.accent}
    }
  }

  @media (max-width: 480px) {
    margin: 20px 0;
    justify-content: start;
    a {
      padding: 8px 8px 8px 0px;
      margin: 0 8px 0 0;
    }
  }
`;