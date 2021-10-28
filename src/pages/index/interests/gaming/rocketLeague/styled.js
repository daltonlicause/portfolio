import styled from "styled-components"
import { colors } from "../../../../../styled/variables";

export const RocketLeagueContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
  
  .attr {
    display: flex;
    flex-flow: row;
    align-items: center;

    .attr-name {
      margin-right: 10px;
    }
    .attr-value {
      color: ${colors.purple};
      &.loading {
        width: 100px;
      }
    }
  }
`;