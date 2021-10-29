import styled from 'styled-components';
import { colors } from '../../styled/variables';

export const PageContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 20px;;

  h2 {
    width: auto;
    display: inline-flex;
    margin: 0 auto 10px 0;
    position: relative;
    padding-bottom: 10px;
    b {
      margin-left: .5em;
    }
  }

  h4 {
    margin: 0;
  }

  section {
    display: flex;
    flex-flow: column;
    padding: 20px 0;
    position: relative;

    &:after {
      content: "";
      height: calc(100% - 70px);
      width: 2px;
      background-color:  ${colors.dim};
      position: absolute;
      margin: 12px;
      z-index: -1;
      top: 60px;
      border-radius: 2px;
    }

    .sub-section, .sub-item {
      display: flex;
      flex-flow: column;
      padding: 20px 40px;
      position: relative;

      &.sub-item {
        &:after {
          content: "";
          width: 2px;
          height: calc(100%);
          position: absolute;
          top: 0;
          left: 9px;
          background-color: ${colors.dim};
          border-radius: 2px;
        } 

        &:last-of-type {
          &:after { 
            height: 32.5px;
            top: -1px;
          }
        }

        &:first-of-type {
          &:after {
            top: -10px;
            height: calc(100% + 12px);
          }
        }

        &:only-of-type {
          &:after {
            top: -10px;
            height: 41px;
          }
        }

        .section-headline {
          &:after {
            left: -31px;
          }
        }
      }

      .section-headline {
        position: relative;
        &:after {
          position: absolute;
          background: ${colors.dim};
          height: 2px;
          width: 18px;
          left: -28px;
          content: "";
          top: calc(50% - 1px);
          border-radius: 2px;
        }
      }

      .attr {
        display: flex;
        flex-flow: row;
        align-items: center;
        margin: 10px 20px;
        .attr-name {
          margin-right: 10px;
        }
        .attr-value {
          display: block;
          color: ${colors.purple};
          &.loading {
            width: 100px;
          }
        }
      }
    }
  }
`;