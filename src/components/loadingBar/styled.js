import styled from "styled-components";
import { colors } from "../../styled/variables";

const LoadingBarContainer = styled.div`
  @keyframes move {
    0%   {transform: translate(-100%, 0)}
    100% {transform: translate(calc(7/2*100%), 0)}
  }

  width: 100%;
  height: 6px;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  background: linear-gradient(to right, ${colors.purple}, ${colors.green});

  .bar {
    position:absolute;
    width: calc(100% * 4/7);
    height: 100%;
    display: flex;
    animation: move 2s linear infinite;
    background-color: ${colors.dim};
    border-radius: 4px;
  }
`;

export default LoadingBarContainer;