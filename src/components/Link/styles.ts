import styled from "styled-components";

export const LinkContainer = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme["blue"]};

  span {
    margin: 4px;
    font-size: 14px;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
    transition: 0.2s border-bottom;
  }
`;
