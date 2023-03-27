import styled from "styled-components";

export const Container = styled.div`
  margin-left: 100px;

  #div-comment {
    display: flex;
    margin-right: 30px;
    border: 1px solid black;
    border-radius: 30px;
    padding: 20px;
    background-color: #f0f2f5;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin-right: 15px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    list-style: none;
  }

  #div-buttons {
    margin-top: 5px;
    margin-left: 50px;
    display: flex;
    gap: 20px;

    button {
      display: flex;
      gap: 5px;
      border: none;
      background-color: transparent;
    }
  }

  #button-like:active, #button-comment:active {
    opacity: 0.7;
  }
`;
