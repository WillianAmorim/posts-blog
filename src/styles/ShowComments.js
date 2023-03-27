import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;

  button {
    font-size: 10px;
    border: none;
    background-color: transparent;
    color: #7d7372;
  }

  #button-show:active {
    opacity: 0.7;
  }
`