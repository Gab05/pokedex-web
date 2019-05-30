import 'reflect-metadata'
import { injectable } from 'inversify'
import pokemonList from '../assets/pokemonList'
import { Pokemon } from '../models/pokemon/Pokemon'

@injectable()
export class PokemonService {

  // TODO: Eventually store in config file to offer both local and heroku backend hosting
  BASE_URL = 'http://localhost:8080'

  getPokemonList = () => pokemonList

  getNumberFromName = (name: string): number => pokemonList.indexOf(name) + 1

  fetchPokemonByName = (name: string) => fetch(this.BASE_URL + '/pokemons/' + name)
    .then((response: Response) => {
      return response.json()
    }).then((pokemon: Pokemon) => pokemon)
}
