import styled from "styled-components";

export const SearchFormContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-top: 5rem;
  gap: 1rem;
`;

export const SearchFormSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    &:first-child {
      color: ${(props) => props.theme["base-title"]};
    }

    &:last-child {
      font-size: 12px;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;

export const SearchFormInputContainer = styled.div`
  width: 100%;

  input {
    background: ${(props) => props.theme["base-input"]};
    border: solid 1px ${(props) => props.theme["base-border"]};
    padding: 0.875rem;
    width: 100%;
    border-radius: 6px;

    &:focus {
      outline: 2px solid ${(props) => props.theme["blue"]};
    }
  }
`;
