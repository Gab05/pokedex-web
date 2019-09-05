import 'reflect-metadata'
import { injectable } from 'inversify'
import { getPokedexCoreUrl } from '../UrlProvider'
import { Ability } from '../../models/pokemon/ability/Ability'

@injectable()
export class AbilityService {

  private readonly BASE_URL = getPokedexCoreUrl()

  public getAbilityList = () => [] // TODO

  public fetchAbility = (name: string) => {
    console.log('Fetching ability ', name)
    return fetch(this.BASE_URL + '/abilities/' + name)
      .then((response: Response) => {
        console.log('first response: ', response)
        return response
      })
      .then((response: Response) => response.json())
      .then((ability: Ability) => ability)
  }
}
