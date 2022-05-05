import styled from "styled-components";

export const Display = {
  Area: styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 2px solid black;
    background-color: ${({ theme }) => theme.displayCaracteristics.backgroundColor};
    position: relative;
    z-index: 1;

    .display-info__background-image {
      position: absolute;
      z-index: -1;
      opacity: 0.4;

      img {
        object-fit: cover;
      }
    }
  `,
  InfoArea: styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
  `,
  Info: styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
  `,
  LabelInfo: styled.span`
    color: white;
    margin-right: 5px;
    text-transform: uppercase;
  `,
  ResultInfo: styled.span`
    color: white;
    text-transform: uppercase;
  `
}
