import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;

  input {
    width: 70%;
    height: 3rem;
    background-color: ${(props) => props.theme["gray-900"]};
    border: none;
    border-radius: 6px;
    padding: 1rem 0.8rem;
    color: ${(props) => props.theme["gray-300"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
      font-size: 17px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: 10px;
  border: 0;
  padding: 1rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme["green-300"]};
  color: ${(props) => props.theme["green-300"]};
  font-size: 15px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme["green-500"]};
    border-color: 1px solid ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme.white};
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  }
`;
