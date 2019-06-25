import 'reflect-metadata'
import { injectable } from 'inversify'
import pokemonList from '../../assets/pokemonList'
import { Pokemon } from '../../models/pokemon/Pokemon'

@injectable()
export class PokemonService {

  private readonly BASE_URL = process.env.REACT_APP_POKEDEX_CORE_URL
  private readonly LOCAL_BASE_URL = 'https://localhost:8080'
  private readonly REMOTE_BASE_URL = 'https://gablalib-pokedex-core.herokuapp.com'

  public getPokemonList = () => pokemonList

  public fetchPokemonByName = (name: string) => fetch(this.REMOTE_BASE_URL + '/pokemons/' + name)
    .then((response: Response) => {
      return response.json()
    }).then((pokemon: Pokemon) => pokemon)

  public getNormalSpriteUrl = (name: string) => this.REMOTE_BASE_URL + '/pokemons/' + name + '/sprite/normal'

  public getShinySpriteUrl = (name: string) => this.REMOTE_BASE_URL + '/pokemons/' + name + '/sprite/shiny'
}
