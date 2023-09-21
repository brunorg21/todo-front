import { styled } from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  width: 350px;
  height: 400px;

  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 6px;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    h2 {
      color: ${(props) => props.theme.white};
    }
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    margin-top: 20px;

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};
      padding: 1rem;
      width: 20rem;
    }
    button[type="submit"] {
      border: 0;
      background: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 1rem;
      border-radius: 6px;
      cursor: pointer;
      width: 10rem;
      font-size: medium;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme["green-700"]};
        transition: background-color 0.2s;
      }
    }
  }
`;
