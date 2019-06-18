import { Type } from '../type/Type'
import { MoveCategory } from './MoveCategory'
import { MoveFlag } from './MoveFlag'

export interface Move {
  name: string
  type: Type
  power: number
  accuracy: number
  category: MoveCategory
  maxPP?: number
  description?: string
  zMovePower?: number
  battleEffect?: string
  battleEffectRatio?: number
  overworldEffect?: string
  baseCriticalHitRatio?: number
  priority?: number
  flags?: MoveFlag[]
}
