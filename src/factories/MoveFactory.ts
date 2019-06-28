import { injectable } from 'inversify'
import 'reflect-metadata'
import { Move } from '../models/move/Move'
import { MoveCategory } from '../models/move/MoveCategory'
import { Type } from '../models/type/Type'

@injectable()
export class MoveFactory {

  public createBlankMove = (): Move => ({
    name: '',
    type: Type.NONE,
    power: 0,
    accuracy: 0,
    category: MoveCategory.NONE,
    pp: 0,
    description: '',
    zMovePower: 0,
    battleDescription: '',
    battleEffect: '',
    battleEffectRate: '',
    overworldEffect: '',
    baseCriticalHitRatio: 0,
    priority: 0,
    flags: [],
  }) as Move
}
