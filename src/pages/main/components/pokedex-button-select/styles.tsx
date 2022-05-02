import styled from "styled-components";
import ButtonSelect from '../assets/images/button-select.png';

const buttonNoStyle = {
  "outline": "none;",
  "background": "transparent;",
  "border": "none;",
};

export const Button = {
  Area: styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${ButtonSelect});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Select: styled.div`
    width: 80%;
    height: 80%;
    border-radius: 50%;
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