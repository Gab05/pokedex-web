import 'reflect-metadata'
import { injectable } from 'inversify'
import { Move } from '../models/move/Move'
import { Abilities } from '../models/pokemon/ability/Abilities'
import { EggGroup } from '../models/pokemon/basic/EggGroup'
import { GenderRatio } from '../models/pokemon/basic/GenderRatio'
import { Weight } from '../models/pokemon/basic/Weight'
import { Pokemon } from '../models/pokemon/Pokemon'
import { Stats } from '../models/pokemon/stats/Stats'
import { Type } from '../models/type/Type'

@injectable()
export class PokemonFactory {

  private static createBlankAbilities(): Abilities {
    return {
      first: '',
      second: '',
      hidden: '',
    }
  }

  private static createBlankStats(): Stats {
    return { hp: 0, atk: 0, def: 0, spatk: 0, spdef: 0, speed: 0 } as Stats
  }

  public createBlankPokemon = (): Pokemon => {
    return {
      name: '',
      nationalNumber: 0,
      typing: [] as Type[],
      weight: { lbs: '', kg: ''} as Weight,
      abilities: PokemonFactory.createBlankAbilities(),
      levelUpMoves: [] as Move[],
      breedingMoves: [] as Move[],
      tutorMoves: [] as Move[],
      baseStats: PokemonFactory.createBlankStats(),
      baseExpGrowth: 0,
      baseEggSteps: 0,
      baseHappiness: 0,
      genderRatio: { male: '', female: ''} as GenderRatio,
      captureRate: '',
      eggGroup: [] as EggGroup[],
      effortValuesYielded: PokemonFactory.createBlankStats(),
    }
  }
}
