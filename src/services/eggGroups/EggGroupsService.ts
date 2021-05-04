import 'reflect-metadata'
import { injectable } from 'inversify'
import { getPokedexCoreUrl } from '../UrlProvider'
import EggGroup from '../../models/eggGroups/EggGroup'

@injectable()
export default class EggGroupsService {

  private readonly BASE_URL = getPokedexCoreUrl()

  public fetchEggGroupByName(eggGroup: string): Promise<EggGroup> {
    return fetch(`${this.BASE_URL}/eggGroups/${eggGroup}`)
      .then((response: Response) => response.json())
      .then((resource: EggGroup) => resource)
  }

  public getEggGroupList = (): string[] => ([
    'monster',
    'human-like',
    'water_1',
    'water_2',
    'water_3',
    'bug',
    'mineral',
    'flying',
    'amorphous',
    'field',
    'ditto',
    'grass',
    'dragon',
  ])
}
