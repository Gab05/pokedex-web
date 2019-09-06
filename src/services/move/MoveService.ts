import 'reflect-metadata'
import { injectable } from 'inversify'
import { getPokedexCoreUrl } from '../UrlProvider'
import { Move } from '../../models/move/Move'
import { Type } from '../../models/type/Type'
import moveList from '../../assets/moveList'
import { MovesRequest } from './requests/MovesRequest'

@injectable()
export class MoveService {

  private readonly BASE_URL = getPokedexCoreUrl()

  public getMoveList = () => moveList

  public getType = (moveName: string): Type => moveList
    .filter((m) => m.name === moveName)
    .map((m) => m.type)[0] as Type

  public fetchMoveByName = (name: string) =>
    fetch(`${this.BASE_URL}/moves/${name}`)
    .then((response: Response) => response.json())
    .then((move: Move) => move)

  public fetchMoves = (request?: MovesRequest) =>
    fetch(`${this.BASE_URL}/moves`, this.buildMovesRequest(request))
      .then((response: Response) => response.json())
      .then((moves: Move[]) => moves)

  private buildMovesRequest = (request?: MovesRequest): RequestInit => ({
    method: 'POST',
    body: request ? JSON.stringify(request) : null,
    headers: { 'Content-Type': 'application/json' },
  })
}
