import { Type } from '../type/Type'
import { MoveCategory } from './MoveCategory'
import { MoveFlag } from './MoveFlag'

export interface Move {
  name: string
  type: Type
  power: number
  accuracy: number
  category: MoveCategory
  pp: number
  zMovePower?: number
  battleDescription: string
  battleEffect: string
  battleEffectRate: string
  overworldEffect?: string
  criticalHitRatio: number
  priority: string
  flags?: MoveFlag[]
}
