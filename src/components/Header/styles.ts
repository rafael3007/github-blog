import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme["base-profile"]},
    ${(props) => props.theme["base-background"]}
  );
`;
