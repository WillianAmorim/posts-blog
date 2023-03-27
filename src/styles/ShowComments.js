import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  margin-bottom: 5px;

  button {
    font-size: 20px;
    border: none;
    background-color: transparent;
    color: #7d7372;
  }

  #button-show:active {
    opacity: 0.7;
  }
`