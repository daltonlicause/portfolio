import styled from 'styled-components';
import { colors } from '../../styled/variables';

export const PageContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 20px;

  section {
    display: flex;
    flex-flow: column;
    padding: 0 40px;
    .sub-section {
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
        }
      }
    }
  }
`;