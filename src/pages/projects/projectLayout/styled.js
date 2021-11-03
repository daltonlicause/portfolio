import styled from "styled-components"

export const ProjectLayoutContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto 60px;

  .banner {
    .attr {
      .attr-name {
        width: 75px;
      }
    }
    .banner-window {
      width: 80%;
      max-width: 600px;
      margin: 40px auto;
      display: block;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid #5e5e5e;
      box-shadow: 4px 4px 12px 2px rgba(0,0,0,.25);

      &.mobile {
        max-width: 300px;
      }
      .window-header {
        width: 100%;
        height: 20px;
        background-color: ${({theme}) => theme.secondaryBackground};
        display: flex;
        justify-conent: center;
        align-items: center;
        .dots {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 0 5px;
          > * {
            height: 6px;
            width: 6px;
            border-radius: 25px;
            margin: 2px;
            :nth-child(1) {
              background-color: #FF605C;
            }
            :nth-child(2) {
              background-color: #FFBD44;
            }
            :nth-child(3) {
              background-color: #00CA4E;
            }
          }
          
        }
      }
      img {
        width: 100%;
      }
    }
  }

  .attr {
    .attr-name {
      margin-right: 10px;
      display: inline-block;
      opacity: .75
    }
    .attr-value {
      &.stack {
        color: ${({theme}) => theme.yellow}
      }

      &.live {
        &.true {
          color: ${({theme}) => theme.green}
        }
        &.false {
          color: ${({theme}) => theme.red}
        }
      }
    }
  }

  .other-projects {
    margin: 60px 0 0;
  }
`;