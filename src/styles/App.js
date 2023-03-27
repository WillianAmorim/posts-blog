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
    margin-left: 50px;
    margin-right: 50px;
    #p-title {
      font-size: 20px;
      font-weight: normal;
    }

    #p-body {
      font-size: 15px;
      font-weight: normal;
      margin-bottom: 15px;
    }

    .action-buttons {
      display: flex;
      justify-content: space-evenly;
      text-align: center;
      align-items: center;
      border-top: 1px solid #D3D3D3;
      border-bottom: 1px solid #D3D3D3;

      button {
        width: auto;
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        gap: 10px;
        padding-top: 15px;
        padding-bottom: 15px;

        p {
          font-size: 20px;
          font-weight: 500;
          color: #7d7372;
        }

      }

    }
  }



  
`