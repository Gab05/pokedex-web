import 'reflect-metadata'
import { injectable } from 'inversify'
import pokemonList from '../assets/pokemonList'

@injectable()
export class PokemonService {

  BASE_URL = 'http://localhost:8080'

  getPokemonList = () => pokemonList

  getNumberFromName = (name: string): number => pokemonList.indexOf(name) + 1

  fetchPokemonByName = (name: string) => fetch(this.BASE_URL + '/pokemons/' + name)

}
