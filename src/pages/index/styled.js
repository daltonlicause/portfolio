import styled from 'styled-components';

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
      padding: 0 40px;
    }
  }
`;