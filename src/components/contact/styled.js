import styled from "styled-components"
import { colors } from "../../styled/variables";

export const ContactContainer = styled.section`
  display: flex;
  flex-flow: column;
  padding: 20px;
  
  form {
    width: 100%;
    .input-group {
      display: flex;
      flex-flow: column;
      padding: 20px 0;
      &.half {
        width: 50%;
        display: inline-flex;
        &.half-left {
          padding: 0 20px 0 0;
        }
        &.half-right {
          padding: ß0 0 0 20px;
        }
      }

      label {
        padding-bottom: 10px;
      }
      input, textarea {
        background: transparent;
        color: ${({theme}) => theme.text};
        border: 1px solid ${colors.dim};
        border-radius: 4px;
        padding: 10px 10px;
        &:focus{
          border-color: ${({theme}) => theme.accent};
          box-shadow: none;
          outline: none;
        }
      }
    }
  }
`;