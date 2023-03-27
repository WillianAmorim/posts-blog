import styled from "styled-components";

export const Container = styled.div `
  background-color: #f0f2f5;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 50px;

  .posts {
    box-shadow: 5px 10px 5px 10px #d1c5c5;
    border-radius: 15px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px;
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
      margin-bottom: 10px;
    }

    #p-body {
      font-size: 15px;
      font-weight: normal;
      margin-bottom: 15px;
      color: #7d7372;
    }

    .action-buttons {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      text-align: center;
      align-items: center;

      div {
        display: flex;
        gap: 20px;
      }

      button {
        width: auto;
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        gap: 10px;
        padding-top: 15px;
        padding-bottom: 15px;
        cursor: pointer;

        p {
          font-size: 20px;
          font-weight: 500;
          color: #7d7372;
        }
      }

      #icon-like {
        color: #2078f4;
      }

      #icon-love {
        color: red;
      }

      .button-active-like:active #like {
        opacity: 0.7;
      }

      .button-active-love:active #love {
        opacity: 0.7;
      }
      
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    text-align: center;
    .title-body {
      margin-left: 0px;
      margin-right: 0px;
    }
  }

  
`