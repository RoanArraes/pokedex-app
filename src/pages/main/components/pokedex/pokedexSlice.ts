import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../../../app/store";
import { PokemonList } from "../../../../interfaces/pokemons.interface";

export const CONSTANTS_POKEDEX_SLICE = {
  GET_POKEMONS: "GET_POKEMONS"
}

type PokedexState = {
  pokemons: PokemonList
}

const initialState: PokedexState = {
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
    }
  }
});

export const { insertPokemons } = pokedexSlice.actions;

export const selectPokedex = ( state: RootState ) => state.pokedex.pokemons 

export default pokedexSlice.reducer;