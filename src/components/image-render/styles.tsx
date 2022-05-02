import { url } from "inspector";
import styled from "styled-components";

type Props = {
  urlImage: string
}

export const Image = {
  Area: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  `,
  Image: styled.div<Props>`
    width: 200px;
    height: 180px;
    background-image: url(${props => props.urlImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  `
}