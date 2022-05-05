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
  sprites: {
    "front_default": string
  },
  stats: [
    {
      "base_stat": number,
      "effort": number,
      "stat": {
        "name": string,
        "url": string
      }
    }
  ],
  types: [
    {
      "slot": number,
      "type": {
        "name": string,
        "url": string
      }
    },
  ],
  weight: number,
  height: number,
  
}