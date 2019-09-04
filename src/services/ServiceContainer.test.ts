import ServiceContainer from './ServiceContainer'
import { MoveFactory } from '../factories/MoveFactory'
import { PokemonFactory } from '../factories/PokemonFactory'
import { MoveService } from './move/MoveService'
import { GenericNameBeautifier } from './nameBeautifiers/GenericNameBeautifier'
import { PokemonNameBeautifier } from './nameBeautifiers/PokemonNameBeautifier'
import { PokemonService } from './pokemon/PokemonService'
import { expect } from 'chai'

const container = ServiceContainer

describe('ServiceContainer', () => {

  it('should return non-null instances of bound services', () => {
    expect(container.get(PokemonNameBeautifier)).instanceOf(PokemonNameBeautifier)
    expect(container.get(PokemonService)).instanceOf(PokemonService)
    expect(container.get(PokemonFactory)).instanceOf(PokemonFactory)
    expect(container.get(GenericNameBeautifier)).instanceOf(GenericNameBeautifier)
    expect(container.get(MoveService)).instanceOf(MoveService)
    expect(container.get(MoveFactory)).instanceOf(MoveFactory)
  })
})
