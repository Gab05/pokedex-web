import 'reflect-metadata'
import { injectable } from 'inversify'
import { getPokedexCoreUrl } from '../UrlProvider'
import { Ability } from '../../models/pokemon/ability/Ability'

@injectable()
export class AbilityService {

  private readonly BASE_URL = getPokedexCoreUrl()

  public getAbilityList = () => [] // TODO

  public fetchAbility = (name: string) =>
    fetch(this.BASE_URL + '/abilities/' + name)
      .then((response: Response) => response.json())
      .then((ability: Ability) => ability)
}
