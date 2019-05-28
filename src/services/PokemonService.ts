import 'reflect-metadata'
import { injectable } from 'inversify'
import pokemonList from '../assets/pokemonList'

@injectable()
export class PokemonService {

  getPokemonList = () => {
    return pokemonList
  }

  getNumberFromName = (name: string): number => {
    return pokemonList.indexOf(name) + 1
  }
}
