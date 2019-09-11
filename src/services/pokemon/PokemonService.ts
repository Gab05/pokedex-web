import 'reflect-metadata'
import { injectable } from 'inversify'
import { UrlProvider } from '../UrlProvider'
import { Pokemon } from '../../models/pokemon/Pokemon'
import pokemonList from '../../assets/pokemonList'

@injectable()
export class PokemonService {

  private readonly urlProvider = new UrlProvider()

  public getPokemonList = (): string[] => pokemonList

  public fetchPokemonByName = (name: string): Promise<Pokemon> =>
    fetch(`${this.urlProvider.getPokedexCoreUrl()}/pokemons/${name}`)
      .then((response: Response) => response.json())
      .then((pokemon: Pokemon) => pokemon)

  public getNormalSpriteUrl = (name: string): string =>
    `${this.urlProvider.getPokedexCoreUrl()}/pokemons/${name}/sprite/normal`

  public getShinySpriteUrl = (name: string): string =>
    `${this.urlProvider.getPokedexCoreUrl()}/pokemons/${name}/sprite/shiny`
}
