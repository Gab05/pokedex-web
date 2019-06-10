import 'reflect-metadata'
import { injectable } from 'inversify'
import pokemonList from '../../assets/pokemonList'
import { Pokemon } from '../../models/pokemon/Pokemon'

@injectable()
export class PokemonService {

  // TODO: Eventually store in config file to offer both local and heroku backend hosting
  LOCAL_BASE_URL = 'https://localhost:8080'
  REMOTE_BASE_URL = 'https://gablalib-pokedex-core.herokuapp.com'

  public getPokemonList = () => pokemonList

  public getNumberFromName = (name: string): number => pokemonList.indexOf(name) + 1

  public fetchPokemonByName = (name: string) => fetch(this.REMOTE_BASE_URL + '/pokemons/' + name)
    .then((response: Response) => {
      return response.json()
    }).then((pokemon: Pokemon) => pokemon)

  public getNormalSpriteUrl = (name: string) => this.REMOTE_BASE_URL + '/pokemons/' + name + '/sprite/normal'

  public getShinySpriteUrl = (name: string) => this.REMOTE_BASE_URL + '/pokemons/' + name + '/sprite/shiny'
}
