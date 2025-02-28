import styled from "styled-components"

export const ContactContainer = styled.article`
  display: flex;
  flex-flow: column;
  padding: 20px;
  
  form {
    width: 100%;
    .input-group {
      display: flex;
      flex-flow: column;
      padding: 0 0 20px 0;
      &.half {
        width: 50%;
        display: inline-flex;
        &.half-left {
          padding-right: 20px;
        }
        &.half-right {
          padding-left: 20px;
        }

        @media (max-width: 600px) {
          width: 100%;
          &.half-left,
          &.half-right {
            padding-right: 0;
            padding-left: 0;
          }
        }
      }

      label {
        padding-bottom: 10px;
      }

      input, textarea {
        background: transparent;
        color: ${({theme}) => theme.text};
        border: 1px solid ${({theme}) => theme.dim};
        border-radius: 4px;
        padding: 10px 10px;
        &:focus{
          border-color: ${({theme}) => theme.accent};
          box-shadow: none;
          outline: none;
        }
      }
    }

    button {
      &.loading {
        @keyframes move {
          0%   {transform: translate(-100%, 0)}
          100% {transform: translate(calc(7/2*100%), 0)}
        }

        position: relative;
        overflow: hidden;
        color: transparent;
        height: 0px;
        margin: 13px 0px;
        padding: 5px 20px;
        cursor: wait;
        background: linear-gradient(to right, ${({theme}) => theme.purple}, ${({theme}) => theme.green});
        &:after {
          content: "";
          top: 0;
          position:absolute;
          width: calc(100% * 2/7);
          height: 100%;
          display: flex;
          animation: move 1.25s linear infinite;
          background-color: ${({theme}) => theme.mainBackground};
          border-radius: 4px;
        }
      }
    }

    .response {
      padding: 20px 0;
    }
  }
`;