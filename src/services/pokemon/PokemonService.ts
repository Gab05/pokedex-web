import 'reflect-metadata'
import { injectable } from 'inversify'
import { getPokedexCoreUrl } from '../UrlProvider'
import { Pokemon } from '../../models/pokemon/Pokemon'
import pokemonList from '../../assets/pokemonList'

@injectable()
export class PokemonService {

  private readonly BASE_URL = getPokedexCoreUrl()

  public getPokemonList = (): string[] => pokemonList

  public fetchPokemonByName = (name: string): Promise<Pokemon> =>
    fetch(`${this.BASE_URL}/pokemons/${name}`)
      .then((response: Response) => response.json())
      .then((pokemon: Pokemon) => pokemon)

  public getNormalSpriteUrl = (name: string): string =>
    `${this.BASE_URL}/pokemons/${name}/sprite/normal`

  public getShinySpriteUrl = (name: string): string =>
    `${this.BASE_URL}/pokemons/${name}/sprite/shiny`
}
