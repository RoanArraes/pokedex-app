import {
  Button
} from './styles';

import {
  Button as ButtonClick
} from '../../../../components';
import { useAppDispatch } from '../../../../app/hooks';
import { selectButton } from './pokedexButtonSelectSlice';

const PokedexButtonSelect = () => {

  const appDispatch = useAppDispatch();

  return (
    <Button.Area>
      <Button.Select>
        <ButtonClick
          onClick={() => appDispatch(selectButton())}
        />
      </Button.Select>
    </Button.Area>
  )
}

export default PokedexButtonSelect;