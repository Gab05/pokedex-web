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
    zMovePower: 0,
    battleDescription: '',
    battleEffect: '',
    battleEffectRate: '',
    overworldEffect: '',
    criticalHitRatio: 0,
    priority: '',
    flags: [],
  }) as Move
}
