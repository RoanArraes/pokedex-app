import { useEffect, useState } from 'react';
import { getPokemons } from '../../services/pokemons';
import Pokedex from './components/pokedex/Pokedex';
import {
  Container
} from './styles';
import { PokemonList } from '../../interfaces/pokemons.interface';

const Main = () => {

  useEffect(() => {
    getPokemonList();
  }, []);

  const initialState: PokemonList = {
    count: 0,
    next: null,
    previous: null,
    results: []
  }

  const [ pokemonList, setPokemonList ] = useState<PokemonList>(initialState);

  const getPokemonList = async () => { 
    const resp = await getPokemons();
    
    if (resp) {
      setPokemonList(resp);
    }
  }

  return (
    <Container>
      <Pokedex 
        pokemonList={pokemonList}
      />
    </Container>
  );
}

export default Main;