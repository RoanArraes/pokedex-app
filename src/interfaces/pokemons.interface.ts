interface Pokemon {
  name: string,
  url: string
}

export interface PokemonList {
  count: number,
  next: string | null,
  previous: string | null,
  results: Pokemon[]
}

export interface PokemonData {
  forms: [],
  id: number,
  location_area_encounters: string,
  name: string,
  order: number,
  past_types: [],
  species: {},
  sprites: {},
  stats: [],
  types: [],
  weight: number
}