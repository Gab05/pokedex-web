import 'reflect-metadata'
import { injectable } from 'inversify'
import pokemonList from '../../assets/pokemonList'
import { Pokemon } from '../../models/pokemon/Pokemon'

@injectable()
export class PokemonService {

  // TODO: Eventually store in config file to offer both local and heroku backend hosting
  LOCAL_BASE_URL = 'https://localhost:8080'
  REMOTE_BASE_URL = 'https://gablalib-pokedex-core.herokuapp.com'

  getPokemonList = () => pokemonList

  getNumberFromName = (name: string): number => pokemonList.indexOf(name) + 1

  fetchPokemonByName = (name: string) => fetch(this.REMOTE_BASE_URL + '/pokemons/' + name)
    .then((response: Response) => {
      return response.json()
    }).then((pokemon: Pokemon) => pokemon)
}
