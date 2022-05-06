import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { downButton, leftButton, rightButton, upButton } from '../pokedex-button-central/pokedexButtonCentralSlice';
import DisplayCaracteristics from '../display-caracteristics/DisplayCaracteristics';
import { CONSTANTS_POKEDEX_SLICE, selectPokedex } from './pokedexSlice';

import DisplayCentral from '../display-central/DisplayCentral';
import DisplayInfo from '../display-info/DisplayInfo';
import PokedexButtonCentral from '../pokedex-button-central/PokedexButtonCentral';
import PokedexButtonSelect from '../pokedex-button-select/PokedexButtonSelect';
import {
  Container,
  PokedexArea,
} from './styles';

const Pokedex = () => {

  const dispatch = useAppDispatch();
  const pokemonSelectedName = useAppSelector(selectPokedex).pokemon.name;

  let idPokemon: string = "";

  return (
    <Container
      className='pokedex__container'
    >
      <PokedexArea.Area>
        <PokedexArea.DisplayAreaCentral>
          <DisplayCentral
            onPokemonSelectedId={(id) => { idPokemon = id }}
          />
        </PokedexArea.DisplayAreaCentral>
        <PokedexArea.DisplayTopAreaMap>
          <DisplayInfo />
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
            onClickSelect={
              () => pokemonSelectedName === "" && 
              dispatch({ type: CONSTANTS_POKEDEX_SLICE.GET_POKEMON, payload: idPokemon })
            }
          />
        </PokedexArea.ButtonAreaSelect>
      </PokedexArea.Area>
    </Container>
  )
}

export default Pokedex;