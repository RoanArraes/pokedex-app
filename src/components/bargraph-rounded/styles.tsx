import styled from "styled-components";

type Props = {
  isActiveBar?: boolean
}

export const Bargraph = {
  Area: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  `,
  IndicatorsArea: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2px;
    // inverte o carregamento das barras, de baixo para cima.
    transform: rotate(180deg);
  `,
  Label: styled.span`
    width: 100%;
    color: ${({ theme }) => theme.bargraphRounded.colors.labelColor};
    font-size: ${({ theme }) => theme.bargraphRounded.fontSizes.small};
  `,
};

export const IndicatorBar = styled.span<Props>`
  width: 100%;
  height: 1px;
  background-color: ${({ theme, isActiveBar }) => isActiveBar ? theme.bargraphRounded.colors.indicatorActiveColor : theme.bargraphRounded.colors.indicatorDefaultColor};
  margin-bottom: 2px;
`;