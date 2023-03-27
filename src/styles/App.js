import styled from "styled-components";

export const Container = styled.div `
  background-color: #f0f2f5;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 50px;

  .posts {
    border-radius: 15px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 20px;
  }

  .img-user {
    display: flex;
    img {
      width: 40px;
      border-radius: 50px;
      margin-right: 15px;
    }

    p {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .title-body {
    h3 {

    }
  }



  
`