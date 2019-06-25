import 'reflect-metadata'
import moveList from '../../assets/moveList'
import { injectable } from 'inversify'
import { Move } from '../../models/move/Move'
import { Type } from '../../models/type/Type'

@injectable()
export class MoveService {

  // TODO: Eventually store in config file to offer both local and heroku backend hosting
  LOCAL_BASE_URL = 'https://localhost:8080'
  REMOTE_BASE_URL = 'https://gablalib-pokedex-core.herokuapp.com'

  public getMoveList = () => moveList

  public getType = (moveName: string): Type => moveList
    .filter((m) => m.name === moveName)
    .map((m) => m.type)[0] as Type

  public fetchMoveByName = (name: string) =>
    fetch(this.REMOTE_BASE_URL + '/moves/' + name)
    .then((response: Response) => response.json())
    .then((move: Move) => move)
}
