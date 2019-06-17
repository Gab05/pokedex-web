import 'reflect-metadata'
import moveList from '../../assets/moveList'
import { injectable } from 'inversify'

@injectable()
export class MoveService {
  public getMoveList = () => moveList
}
