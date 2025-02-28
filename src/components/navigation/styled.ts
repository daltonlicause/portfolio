import styled from "styled-components"

export const NavigationContainer = styled.nav`
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap-reverse;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  .links-container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  button {
    margin: 0 0 0 auto;
  }
`;