import 'reflect-metadata'
import { injectable } from 'inversify'
import { Abilities } from '../models/pokemon/ability/Abilities'
import { GenderRatio } from '../models/pokemon/basic/GenderRatio'
import { Weight } from '../models/pokemon/basic/Weight'
import { Pokemon } from '../models/pokemon/Pokemon'
import { Stats } from '../models/pokemon/stats/Stats'

@injectable()
export class PokemonFactory {

  private static createBlankAbilities = (): Abilities => ({ first: '' })

  private static createBlankStats = (): Stats => ({ hp: 0, atk: 0, def: 0, spatk: 0, spdef: 0, speed: 0 })

  private static createBlankWeight = (): Weight => ({ lbs: '', kg: '' })

  private static createBlankGenderRatio = (): GenderRatio => ({ male: '', female: '' })

  public createBlankPokemon = (): Pokemon => ({
    name: '',
    nationalNumber: 0,
    typing: [],
    weight: PokemonFactory.createBlankWeight(),
    abilities: PokemonFactory.createBlankAbilities(),
    levelUpMoves: [],
    eggMoves: [],
    tmMoves: [],
    baseStats: PokemonFactory.createBlankStats(),
    baseExpGrowth: 0,
    baseEggSteps: 0,
    baseHappiness: 0,
    genderRatio: PokemonFactory.createBlankGenderRatio(),
    captureRate: '',
    eggGroups: undefined,
    effortValuesYielded: PokemonFactory.createBlankStats(),
  })
}
