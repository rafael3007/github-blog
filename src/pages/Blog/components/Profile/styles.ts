import styled from "styled-components";

export const ProfileContainer = styled.header`
  height: 200px;
  width: 75%;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: inset;
  border-radius: 10px;
  margin: 0 auto;
  padding: 1.5rem;
  margin-top: -8rem;

  display: flex;
  gap: 1rem;
`;

export const ImageContent = styled.aside`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 8px;
  }
`;

export const InformationsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  gap: 1rem;
  flex: 1;
  padding: 4px;
  color: ${(props) => props.theme["base-title"]};
`;

export const HeaderInformationsProfile = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.6;

  h1 {
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 700;
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
      transition: 0.2s border-bottom;
    }
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
    }
  }
`;
