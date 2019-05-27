import pokemonList from '../assets/pokemonList'
import { injectable } from 'inversify'

@injectable()
export class PokemonService {

  getPokemonList = () => {
    return pokemonList
  }

  getNumberFromName = (name: string): number => {
    return pokemonList.indexOf(name) + 1
  }
}
