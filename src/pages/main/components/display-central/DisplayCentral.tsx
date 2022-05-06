import { useEffect } from "react";
import { ImageRender } from "../../../../components";
import { Display, Message } from "./styles";
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
        documento.scrollTop =+ buttonCentral.value * 34;
      }
    }
  });

  useEffect(() => {
    dispatch(clearPokemonData());

    if(buttonCentral.next && pokemonList.next && pokemonList.next !== "") {
      dispatch({ type: CONSTANTS_POKEDEX_SLICE.GET_POKEMONS_NEXT, payload: pokemonList.next });
    } else if (buttonCentral.previous && pokemonList.previous && pokemonList.previous !== "") {
      dispatch({ type: CONSTANTS_POKEDEX_SLICE.GET_POKEMONS_PREVIOUS, payload: pokemonList.previous });
    }
  },[buttonCentral]);

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
    <Display.Area
      selectedPokemon={selectedPokemon.name !== ""}
    >
      <ImageRender
        alt="background-image-display-central"
        className="display-central__pokemon-image"
        urlImage={selectedPokemon.sprites['front_default']} 
      />
      <Display.TitleArea
        id="DisplayCentralTitleArea"
      >
        {
          pokemonList && pokemonList.results.length > 0 
            ? 
            pokemonList.results.map((pokemon, idx) => {
              return(
                <Display.Title
                  key={pokemon.name}
                  isInObservation={verifyIsInObservation(idx, pokemon.url)}
                >
                  {capitalizeFirstLetter(pokemon.name)}
                </Display.Title>
              )
            })
          :
            <Display.InfoArea>
              <Message>Loading...</Message>
            </Display.InfoArea>
        }
      </Display.TitleArea>
    </Display.Area>
  )
}

export default DisplayCentral;