import { useEffect } from "react";
import { ImageRender } from "../../../../components";
import { PokemonList } from "../../../../interfaces/pokemons.interface";
import { Display } from "./styles";
import { buttonCentralValue } from '../pokedex-button-central/pokedexButtonCentralSlice';
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { clearPokemonData, CONSTANTS_POKEDEX_SLICE, selectPokedex } from "../pokedex/pokedexSlice";

type Props = {
  onPokemonSelectedId: (id: string) => void
}

const DisplayCentral = ({
  onPokemonSelectedId
}: Props) => {

  const dispatch = useAppDispatch();

  const buttonCentral = useAppSelector(buttonCentralValue);
  const pokemonList = useAppSelector(selectPokedex).pokemons;
  const selectedPokemon = useAppSelector(selectPokedex).pokemon;


  useEffect(() => {
    dispatch({ type: CONSTANTS_POKEDEX_SLICE.GET_POKEMONS });
  }, [])

  useEffect(() => {
    if(pokemonList) {
      const documento = document.getElementById('DisplayCentralTitleArea');
      if(documento) {
        documento.scrollTop =+ buttonCentral.value * 35;
      }
    }
  });

  useEffect(() => {
    dispatch(clearPokemonData());
  },[buttonCentral]);

  const renderPokemonsList = (list: PokemonList) => {
    return (
      <Display.TitleArea
        id="DisplayCentralTitleArea"
      >
        {
          list && list.results.length > 0 && list.results.map((pokemon, idx) => {
            return(
              <Display.Title
                key={pokemon.name}
                isInObservation={verifyIsInObservation(idx, pokemon.url)}
              >
                {capitalizeFirstLetter(pokemon.name)}
              </Display.Title>
            )
          })
        }
      </Display.TitleArea>
    )
  }

  const getId = (param: string): string => {
    return param.split('pokemon/')[1].substring(0,2).replace("/", "");
  }

  const capitalizeFirstLetter = (word: string): string => {
    return word[0].toUpperCase() + word.substring(1);
  }

  const verifyIsInObservation = (indexElement: number, pokemonUrl: string): boolean => {
    if(indexElement === buttonCentral.value) {
      const id = getId(pokemonUrl);
      onPokemonSelectedId(id);
      return true;
    }
    return false;
  }

  return (
    <Display.Area>
      {
        selectedPokemon.name !== ""
          ?
            <ImageRender
              urlImage={selectedPokemon.sprites['front_default']} 
            />
          :
            renderPokemonsList(pokemonList)
      }
    </Display.Area>
  )
}

export default DisplayCentral;