import { Type } from '../type/Type'
import { Weight } from './basic/Weight'
import { Abilities } from './ability/Abilities'
import { LevelUpMove } from './learned-moves/LevelUpMove'
import { TmMove } from './learned-moves/TmMove'
import { Stats } from './stats/Stats'
import { ExpGrowth } from './basic/ExpGrowth'
import { GenderRatio } from './basic/GenderRatio'

export interface Pokemon {
  name: string
  nationalNumber: number
  typing: Type[]
  weight: Weight
  abilities: Abilities
  levelUpMoves: LevelUpMove[]
  eggMoves: string[]
  tmMoves: TmMove[]
  baseStats: Stats
  baseExpGrowth?: ExpGrowth
  baseEggSteps?: number
  baseHappiness?: number
  genderRatio: GenderRatio
  captureRate: string
  eggGroups?: string[]
  effortValuesYielded?: Stats
}
