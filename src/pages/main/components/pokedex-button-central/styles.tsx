import styled from "styled-components";
import ButtonImage from '../assets/images/button-central.png'

const buttonNoStyle = {
  "outline": "none;",
  "background": "transparent;",
  "border": "none;",
};

export const Button = {
  Area: styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${ButtonImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `,
    Up: styled.div`
      width: 40px;
      height: 40px;
      position: absolute;
      transform: translateY(-40px);
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        ${buttonNoStyle}

        :active {
          background-color: ${({ theme }) => theme.colors.white};
          border: 2px solid black;
          border-radius: 50%;
          opacity: 0.5;
        }
      }
    `,
    Down: styled.div`
      width: 40px;
      height: 40px;
      position: absolute;
      transform: translateY(35px);
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        ${buttonNoStyle}

        :active {
          background-color: ${({ theme }) => theme.colors.white};
          border: 2px solid black;
          border-radius: 50%;
          opacity: 0.5;
        }
      }
    `,
    Right: styled.div`
      width: 40px;
      height: 40px;
      position: absolute;
      transform: translateX(40px);
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        ${buttonNoStyle}

        :active {
          background-color: ${({ theme }) => theme.colors.white};
          border: 2px solid black;
          border-radius: 50%;
          opacity: 0.5;
        }
      }
    `,
    Left: styled.div`
      width: 40px;
      height: 40px;
      position: absolute;
      transform: translateX(-40px);
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        ${buttonNoStyle}

        :active {
          background-color: ${({ theme }) => theme.colors.white};
          border: 2px solid black;
          border-radius: 50%;
          opacity: 0.5;
        }
      }
    `
}