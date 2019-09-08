import { expect } from 'chai'
import ServiceContainer from './ServiceContainer'
import { MoveFactory } from '../factories/MoveFactory'
import { PokemonFactory } from '../factories/PokemonFactory'
import { MoveService } from './move/MoveService'
import { GenericNameBeautifier } from './name-beautifiers/GenericNameBeautifier'
import { PokemonNameBeautifier } from './name-beautifiers/PokemonNameBeautifier'
import { PokemonService } from './pokemon/PokemonService'
import { AbilityService } from './ability/AbilityService'

const container = ServiceContainer

describe('ServiceContainer', () => {

  it('should return non-null instances of bound services', () => {
    expect(container.get(GenericNameBeautifier)).instanceOf(GenericNameBeautifier)
    expect(container.get(PokemonNameBeautifier)).instanceOf(PokemonNameBeautifier)
    expect(container.get(PokemonService)).instanceOf(PokemonService)
    expect(container.get(PokemonFactory)).instanceOf(PokemonFactory)
    expect(container.get(MoveService)).instanceOf(MoveService)
    expect(container.get(MoveFactory)).instanceOf(MoveFactory)
    expect(container.get(AbilityService)).instanceOf(AbilityService)
  })
})
