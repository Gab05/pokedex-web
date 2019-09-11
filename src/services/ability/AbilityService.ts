import 'reflect-metadata'
import { injectable } from 'inversify'
import { UrlProvider } from '../UrlProvider'
import { Ability } from '../../models/pokemon/ability/Ability'

@injectable()
export class AbilityService {

  private readonly urlProvider = new UrlProvider()

  public getAbilityList = () => [] // TODO add static list in assets for quick access in searchbar -> dropdown

  public fetchAbility = (name: string) =>
    fetch(this.urlProvider.getPokedexCoreUrl() + '/abilities/' + name)
      .then((response: Response) => response.json())
      .then((ability: Ability) => ability)
}
