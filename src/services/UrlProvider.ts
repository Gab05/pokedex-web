
export const getPokedexCoreUrl = (): string =>
  process.env.NODE_ENV === 'development'
    // ? 'http://localhost:8080'
    ? 'https://gablalib-pokedex-core.herokuapp.com'
    : 'https://gablalib-pokedex-core.herokuapp.com'
