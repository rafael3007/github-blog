import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 250px;
  border-radius: 10px;
  gap: 1rem;
  padding: 20px;
  text-decoration: none;
  background-color: ${(props) => props.theme["base-post"]};

  &:hover {
    outline: 2px solid ${(props) => props.theme["base-span"]};
    transition: 0.2s outline;
  }
`;

export const PostHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 20px;
    width: 80%;
  }

  span {
    color: ${(props) => props.theme["base-span"]};
    font-size: 12px;
  }
`;

export const PostDecription = styled.article`
  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 14px;
  }
`;
