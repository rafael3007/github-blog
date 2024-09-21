import styled from "styled-components";

export const PostContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 3rem auto 0;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const LinkComponent = styled.a`
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

export const PostHeader = styled.header`
  height: 200px;
  width: 75%;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: inset;
  border-radius: 10px;
  margin: 0 auto;
  padding: 1.5rem;
  margin-top: -8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  nav {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  h1 {
    color: ${(props) => props.theme["base-title"]};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme["blue"]};

    span {
      margin: 4px;
      font-size: 14px;
    }

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
      margin: -1px;
      transition: 0.2s border-bottom;
    }
  }
`;

export const PostSection = styled.section`
  width: 75%;
  padding: 10px;

  p {
    margin: 2rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const FooterInformationsProfile = styled.footer`
  display: flex;
  gap: 1rem;
  justify-content: start;
  text-align: left;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["base-subtitle"]};

    span {
      margin: 4px;
      font-size: 18px;
      padding-left: 2px;
      color: ${(props) => props.theme["base-span"]};
    }
  }
`;
