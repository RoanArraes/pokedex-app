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
        />
      </Button.Up>
      <Button.Right>
        <ButtonClick
          onClick={onClickRight}
        />
      </Button.Right>
      <Button.Left>
        <ButtonClick
          onClick={onClickLeft}
        />
      </Button.Left>
      <Button.Down>
        <ButtonClick
          onClick={onClickDown}
        />
      </Button.Down>
    </Button.Area>
  )
}

export default PokedexButtonCentral;