import 'reflect-metadata'
import { injectable } from 'inversify'
import { getPokedexCoreUrl } from '../UrlProvider'
import { Pokemon } from '../../models/pokemon/Pokemon'
import pokemonList from '../../assets/pokemonList'

@injectable()
export class PokemonService {

  private readonly BASE_URL = getPokedexCoreUrl()

  public getPokemonList = () => pokemonList

  public fetchPokemonByName = (name: string) =>
    fetch(this.BASE_URL + '/pokemons/' + name)
      .then((response: Response) => response.json())
      .then((pokemon: Pokemon) => pokemon)

  public getNormalSpriteUrl = (name: string) => {
    console.log(this.BASE_URL)
    return this.BASE_URL + '/pokemons/' + name + '/sprite/normal'
  }

  public getShinySpriteUrl = (name: string) => this.BASE_URL + '/pokemons/' + name + '/sprite/shiny'
}
