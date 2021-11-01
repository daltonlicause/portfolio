import styled from 'styled-components';
import { colors } from '../../styled/variables';

export const PageContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 20px;;

  h2 {
    width: auto;
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    b {
      margin-left: .5em;
    }
  }
  
  h3 {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  h4 {
    margin: 0;
  }

  section {
    display: flex;
    flex-flow: column;
    padding: 0;
    position: relative;

    &:after {
      content: "";
      z-index: -1;
      position: absolute;
      height: calc(100% - 62px);
      width: 2px;
      top: 62px;
      left: 11px;
      background-color:  ${colors.dim};
      border-radius: 2px;
    }

    .sub-section, .sub-item {
      display: flex;
      flex-flow: column;
      padding: 20px 0 20px 40px;
      position: relative;

      &.sub-item {
        &:after {
          content: "";
          width: 2px;
          height: 100%;
          position: absolute;
          top: 0;
          left: 8px;
          background-color: ${colors.dim};
          border-radius: 2px;
        } 

        &:first-of-type {
          &:after {
            top: -10px;
            height: calc(100% + 12px);
          }
        }

        &:last-of-type,
        &:only-of-type {
          &:after {
            top: -10px;
            height: 32px;
          }
        }

        p {
          padding: 0;
          margin: 15px 0 0;
        }
      }

      .section-headline, 
      .sub-item-headline {
        position: relative;
        &:before, &:after {
          content: "";
          position: absolute;
          background: ${colors.dim};
          border-radius: 2px;
        }
        &:before {
          width: 2px;
          height: calc(50% + 1px);
          left: -29px;
          top: 0;
        }
        &:after {
          width: 20px;
          height: 2px;
          left: -29px;
          top: calc(50% - 1px);
        }
      }

      .sub-item-headline {
        &:before, &:after {
          left: -32px;
        }
      }

      .attr {
        display: flex;
        flex-flow: row;
        align-items: center;
        margin: 10px 0;
        .attr-name {
          margin-right: 10px;
        }
        .attr-value {
          display: block;
          &.loading {
            width: 100px;
          }
        }
      }
    }
  }
`;