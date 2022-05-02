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
          <PokedexButtonCentral />
        </PokedexArea.ButtonAreaCentral>
        <PokedexArea.ButtonAreaSelect>
          <PokedexButtonSelect />
        </PokedexArea.ButtonAreaSelect>
      </PokedexArea.Area>
    </Container>
  )
}

export default Pokedex;