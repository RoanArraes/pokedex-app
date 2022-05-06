import axios from "axios";
import { GET_POKEMONS_LIST, GET_POKEMON_DATA } from "../common/repositories";
import { PokemonList, PokemonData } from "../interfaces/pokemons.interface";

export const getPokemons = async(): Promise<PokemonList | any> => {
  try {
    const response = await axios.get(GET_POKEMONS_LIST);
    return response.data;
  }
  catch (error) {
    return null;
  }
}

export const getPokemonsNext = async(nextListUrl: string): Promise<PokemonList | any> => {
  try {
    const response = await axios.get(nextListUrl);
    return response.data;
  }
  catch (error) {
    return null;
  }
}

export const getPokemonsPrevious = async(previousListUrl: string): Promise<PokemonList | any> => {
  try {
    const response = await axios.get(previousListUrl);
    return response.data;
  }
  catch (error) {
    return null;
  }
}

export const getPokemonData = async(id: string): Promise<PokemonData | any> => {
  try {
    const response =  await axios.get(GET_POKEMON_DATA + id);
    return response.data;
  }
  catch(error) {
    return null
  }
}