import { call, put, takeLatest } from 'redux-saga/effects';
import { PokemonData, PokemonList } from '../interfaces/pokemons.interface';
import { getPokemonData, getPokemons, getPokemonsNext, getPokemonsPrevious } from '../services/pokemons';
import { insertPokemon, insertPokemons } from '../pages/main/components/pokedex/pokedexSlice';
import {  CONSTANTS_POKEDEX_SLICE } from '../pages/main/components/pokedex/pokedexSlice';

type action = {
  type: string,
  payload: string
}

function* pokemonsGet() {
  try {
    const pokemons: PokemonList = yield call(getPokemons);
    yield put(insertPokemons(pokemons))
  } catch(error) {
    console.log("error", error)
  }
}

function* pokemonsGetNext({type, payload}: action) {
  try {
    const pokemons: PokemonList = yield call(getPokemonsNext, payload);
    yield put(insertPokemons(pokemons))
  }
  catch (error) {
    console.log("error", error)
  }
}

function* pokemonsGetPrevious({type, payload}: action) {
  try {
    const pokemons: PokemonList = yield call(getPokemonsPrevious, payload);
    yield put(insertPokemons(pokemons))
  }
  catch (error) {
    console.log("error", error)
  }
}

function* pokemonGet({type, payload}: action) {
  try {
    const pokemon: PokemonData = yield call(getPokemonData, payload)
    yield put(insertPokemon(pokemon))
  } catch(e) {
    console.log("error", e);
  }
}

function* mySaga() {
  yield takeLatest(CONSTANTS_POKEDEX_SLICE.GET_POKEMONS, pokemonsGet);
  yield takeLatest(CONSTANTS_POKEDEX_SLICE.GET_POKEMONS_NEXT, pokemonsGetNext);
  yield takeLatest(CONSTANTS_POKEDEX_SLICE.GET_POKEMONS_PREVIOUS, pokemonsGetPrevious);
  yield takeLatest(CONSTANTS_POKEDEX_SLICE.GET_POKEMON, pokemonGet)
}

export default mySaga;
