import 'reflect-metadata'
import { injectable } from 'inversify'
import { UrlProvider } from '../UrlProvider'
import { Move } from '../../models/move/Move'
import { Type } from '../../models/type/Type'
import moveList from '../../assets/moveList'
import { MovesRequest } from './requests/MovesRequest'
import { MoveEntity } from '../../models/move/MoveEntity'

@injectable()
export class MoveService {

  private readonly urlProvider = new UrlProvider()

  public getMoveList = (): MoveEntity[] => moveList

  public getType = (moveName: string): Type => moveList
    .filter((m) => m.name === moveName)
    .map((m) => m.type)[0] as Type

  public fetchMoveByName = (name: string): Promise<Move> =>
    fetch(`${this.urlProvider.getPokedexCoreUrl}/moves/${name}`)
    .then((response: Response) => response.json())
    .then((move: Move) => move)

  public fetchMoves = (request?: MovesRequest): Promise<Move[]> =>
    fetch(`${this.urlProvider.getPokedexCoreUrl}/moves`, this.buildMovesRequest(request))
      .then((response: Response) => response.json())
      .then((moves: Move[]) => moves)

  private buildMovesRequest = (request?: MovesRequest): RequestInit => ({
    method: 'POST',
    body: request ? JSON.stringify(request) : null,
    headers: { 'Content-Type': 'application/json' },
  })
}
