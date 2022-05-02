import { useEffect, useState } from "react";
import { ImageRender } from "../../../../components";
import { PokemonList } from "../../../../interfaces/pokemons.interface";
import { Display } from "./styles";
import { buttonCentralValue } from '../pokedex-button-central/pokedexButtonCentralSlice';
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { buttonSelectValue, clearSelectButtonData } from "../pokedex-button-select/pokedexButtonSelectSlice";

type Props = {
  pokemonList: PokemonList
}

const DisplayCentral = ({
  pokemonList
}: Props) => {

  const dispatch = useAppDispatch();

  const buttonCentral = useAppSelector(buttonCentralValue);
  const buttonSelect = useAppSelector(buttonSelectValue);
  const [ selectedPokemon, setSelectedPokemon ] = useState("");

  useEffect(() => {
    if(pokemonList) {
      const documento = document.getElementById('DisplayCentralTitleArea');
      if(documento) {
        documento.scrollTop =+ buttonCentral.value * 35;
      }
    }

    if(buttonSelect.action !== "" && selectedPokemon === "") {
      searchIdElementSelected();
    }
  });

  useEffect(() => {
      setSelectedPokemon("");
      dispatch(clearSelectButtonData());
  },[buttonCentral]);

  const searchIdElementSelected = () => {
    const elementSelected = pokemonList.results[buttonCentral.value];
    dispatch(clearSelectButtonData());
    setSelectedPokemon(getId(elementSelected.url));
  }

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
                isInObservation={idx === buttonCentral.value}
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

  return (
    <Display.Area>
      {
        selectedPokemon !== ""
          ?
            <ImageRender
              idToGetImage={selectedPokemon} 
            />
          :
            renderPokemonsList(pokemonList)
      }
    </Display.Area>
  )
}

export default DisplayCentral;