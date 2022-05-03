import { useAppDispatch } from '../../../../app/hooks';
import { downButton, leftButton, rightButton, upButton } from '../pokedex-button-central/pokedexButtonCentralSlice';
import { selectButton } from '../pokedex-button-select/pokedexButtonSelectSlice';
import { PokemonList } from '../../../../interfaces/pokemons.interface';
import DisplayCaracteristics from '../display-caracteristics/DisplayCaracteristics';
import DisplayCentral from '../display-central/DisplayCentral';
import DisplayMapLocalization from '../display-map-localization/DisplayMapLocalization';
import PokedexButtonCentral from '../pokedex-button-central/PokedexButtonCentral';
import PokedexButtonSelect from '../pokedex-button-select/PokedexButtonSelect';
import {
  Container,
  PokedexArea,
} from './styles';

type Props = {
  pokemonList: PokemonList
}

const Pokedex = ({
  pokemonList
}: Props) => {

  const dispatch = useAppDispatch();

  return (
    <Container
      className='pokedex__container'
    >
      <PokedexArea.Area>
        <PokedexArea.DisplayAreaCentral>
          <DisplayCentral
            pokemonList={pokemonList}
          />
        </PokedexArea.DisplayAreaCentral>
        <PokedexArea.DisplayTopAreaMap>
          <DisplayMapLocalization />
        </PokedexArea.DisplayTopAreaMap>
        <PokedexArea.DisplayBottomAreaCaracteristics>
          <DisplayCaracteristics />
        </PokedexArea.DisplayBottomAreaCaracteristics>
        <PokedexArea.ButtonAreaCentral>
          <PokedexButtonCentral
            onClickUp={() => dispatch(upButton())}
            onClickDown={() => dispatch(downButton())}
            onClickLeft={() => dispatch(leftButton())}
            onClickRight={() => dispatch(rightButton())}
          />
        </PokedexArea.ButtonAreaCentral>
        <PokedexArea.ButtonAreaSelect>
          <PokedexButtonSelect
            onClickSelect={() => dispatch(selectButton())}
          />
        </PokedexArea.ButtonAreaSelect>
      </PokedexArea.Area>
    </Container>
  )
}

export default Pokedex;