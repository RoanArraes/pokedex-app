import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../../../app/store";
import { PokemonData, PokemonList } from "../../../../interfaces/pokemons.interface";

export const CONSTANTS_POKEDEX_SLICE = {
  GET_POKEMONS: "GET_POKEMONS",
  GET_POKEMON: "GET_POKEMON"
}

type PokedexState = {
  pokemon: PokemonData,
  pokemons: PokemonList
}

const initialState: PokedexState = {
  pokemon: {
    forms: [],
    id: 0,
    location_area_encounters: "",
    name: "",
    order: 0,
    past_types: [],
    species: {},
    sprites: {
      "front_default": ""
    },
    stats: [
      {
        "base_stat": 0,
        "effort": 0,
        "stat": {
          "name": "",
          "url": ""
        }
      }
    ],
    types: [],
    weight: 0
  },
  pokemons: {
    count: 0,
    next: "",
    previous: "",
    results: []
  }
}

export const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    insertPokemons: (state, {type, payload}) => {
      state.pokemons = payload;
    },
    insertPokemon: (state, {type, payload}) => {
      state.pokemon = payload
    },
    clearPokemonData: state => {
      state.pokemon = initialState.pokemon;
    }
  }
});

export const { insertPokemon, insertPokemons, clearPokemonData } = pokedexSlice.actions;

export const selectPokedex = ( state: RootState ) => state.pokedex

export default pokedexSlice.reducer;