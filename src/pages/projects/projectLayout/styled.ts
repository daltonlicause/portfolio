import { Page } from "styled/page";
import styled from "styled-components"

export const ProjectPageContainer = styled(Page)`
  display: flex;
  flex-flow: column;

  .about {
    a {
      font-size: 16px;
    }
    .attr {
      .attr-name {
        width: 75px;
      }
    }

    .stack {
      color: ${({theme}) => theme.yellow};    
      dt {
        display: inline;
      }
    }

    .img-window {
      max-width: 100%;
      display: inline-block;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid ${({theme}) => theme.dim};
      box-shadow: 0 4px 8px 0 rgba(0,0,0,.25);

      img {
        width: auto;
        max-width: 100%;
        max-height: 500px;
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