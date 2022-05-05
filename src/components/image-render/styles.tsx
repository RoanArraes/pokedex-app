import styled from "styled-components";

export const Image = {
  Area: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
  `
}