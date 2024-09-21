import styled, { keyframes } from "styled-components";
import { LoadingProps } from ".";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<LoadingProps>`
  border: ${(props) => props.size || "5px"} solid rgba(255, 255, 255, 0.2);
  border-top: ${(props) => props.size || "5px"} solid
    ${(props) => props.color || "#3498db"};
  border-radius: 50%;
  width: ${(props) => props.size || "50px"};
  height: ${(props) => props.size || "50px"};
  animation: ${rotate} 1s infinite linear;
`;
