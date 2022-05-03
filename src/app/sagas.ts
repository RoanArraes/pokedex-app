import { call, put, takeLatest } from 'redux-saga/effects';
import { PokemonList } from '../interfaces/pokemons.interface';
import { getPokemons } from '../services/pokemons';
import { insertPokemons } from '../pages/main/components/pokedex/pokedexSlice';
import {  CONSTANTS_POKEDEX_SLICE } from '../pages/main/components/pokedex/pokedexSlice';

function* pokemonsGet() {
  try {
    const pokemons: PokemonList = yield call(getPokemons);
    yield put(insertPokemons(pokemons))
  } catch(e) {
    console.log("error", e)
  }
}

function* mySaga() {
  yield takeLatest(CONSTANTS_POKEDEX_SLICE.GET_POKEMONS, pokemonsGet);
}

export default mySaga;
