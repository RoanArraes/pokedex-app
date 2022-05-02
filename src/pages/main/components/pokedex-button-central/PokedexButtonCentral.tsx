import {
  Button
} from './styles';

import {
  Button as ButtonClick
} from '../../../../components';

import { useAppDispatch } from '../../../../app/hooks';
import { upButton, downButton, leftButton, rightButton } from './pokedexButtonCentralSlice'; 

const PokedexButtonCentral = () => {

  const dispatch = useAppDispatch();

  return (
    <Button.Area>
      <Button.Up>
        <ButtonClick
          onClick={() => dispatch(upButton())}
        />
      </Button.Up>
      <Button.Right>
        <ButtonClick
          onClick={() => dispatch(rightButton())}
        />
      </Button.Right>
      <Button.Left>
        <ButtonClick
          onClick={() => dispatch(leftButton())}
        />
      </Button.Left>
      <Button.Down>
        <ButtonClick
          onClick={() => dispatch(downButton())}
        />
      </Button.Down>
    </Button.Area>
  )
}

export default PokedexButtonCentral;