import styled from "styled-components"
import { colors } from "../../styled/variables";

export const ProjectLayoutContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  margin: auto;

  .banner {
    .stack {
      color: ${colors.yellow}
    }
    .live {
      &.true {
        color: ${colors.green}
      }
      &.false {
        color: ${colors.red}
      }
    }
    img {
      width: 100%;
      max-width: 600px;
      margin: 60px auto;
      display: block;
    }
  }
`;