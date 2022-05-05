import {
  Button
} from './styles';

import {
  Button as ButtonClick
} from '../../../../components';

type Props = {
  onClickUp: () => void,
  onClickDown: () => void,
  onClickLeft: () => void,
  onClickRight: () => void,
}

const PokedexButtonCentral = ({
  onClickUp,
  onClickDown,
  onClickLeft,
  onClickRight
}: Props) => {

  return (
    <Button.Area>
      <Button.Up>
        <ButtonClick
          onClick={onClickUp}
        >
          ▲
        </ButtonClick>
      </Button.Up>
      <Button.Right>
        <ButtonClick
          onClick={onClickRight}
        >
          ►
        </ButtonClick>
      </Button.Right>
      <Button.Left>
        <ButtonClick
          onClick={onClickLeft}
        >
          ◄
        </ButtonClick>
      </Button.Left>
      <Button.Down>
        <ButtonClick
          onClick={onClickDown}
        >
          ▼
        </ButtonClick>
      </Button.Down>
    </Button.Area>
  )
}

export default PokedexButtonCentral;