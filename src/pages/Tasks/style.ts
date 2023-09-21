import styled from "styled-components";

export const TaskContainer = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  height: 100%;
  margin-top: 4rem;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 7px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.white};
  }
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.6rem;
  color: ${(props) => props.theme["green-300"]};
  background-color: ${(props) => props.theme["gray-800"]};
  padding: 3rem;
  border-radius: 5px;
  text-align: left;
  font-weight: bold;
  margin-bottom: 4rem;

  th {
    padding: 1rem 1rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme["gray-900"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  td {
    background-color: ${(props) => props.theme["gray-900"]};
    padding: 1.25rem 1rem;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const LogoutButtonContainer = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: flex-end;

  button {
    border: 0;
    background: transparent;
    color: ${(props) => props.theme["green-500"]};
    font-weight: bold;
    padding: 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: medium;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    &:not(:disabled):hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }
`;
