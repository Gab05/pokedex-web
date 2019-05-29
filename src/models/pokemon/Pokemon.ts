import { Type } from '../type/Type'
import { Weight } from './basic/Weight'
import { Abilities } from './ability/Abilities'
import { Move } from '../move/Move'
import { Stats } from './stats/Stats'
import { ExpGrowth } from './basic/ExpGrowth'
import { GenderRatio } from './basic/GenderRatio'
import { EggGroup } from './basic/EggGroup'

export interface Pokemon {
  name: string
  nationalNumber: number
  typing: Type[]
  weight: Weight
  abilities: Abilities
  levelUpMoves?: Move[]
  breedingMoves?: Move[]
  tutorMoves?: Move[]
  baseStats: Stats
  baseExpGrowth?: ExpGrowth
  baseEggSteps?: number
  baseHappiness?: number
  genderRatio: GenderRatio
  captureRate: string
  eggGroup?: EggGroup[]
  effortValuesYielded?: Stats
}
