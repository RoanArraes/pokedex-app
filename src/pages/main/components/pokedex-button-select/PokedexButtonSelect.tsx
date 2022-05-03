import {
  Button
} from './styles';

import {
  Button as ButtonClick
} from '../../../../components';

type Props = {
  onClickSelect: () => void
}

const PokedexButtonSelect = ({ onClickSelect }: Props) => {

  return (
    <Button.Area>
      <Button.Select>
        <ButtonClick
          onClick={onClickSelect}
        />
      </Button.Select>
    </Button.Area>
  )
}

export default PokedexButtonSelect;