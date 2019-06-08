import 'chai'
import 'mocha'
import ServiceContainer from './ServiceContainer'
import { PokemonNameBeautifier } from './nameBeautifiers/PokemonNameBeautifier'
import { PokemonService } from './pokemon/PokemonService'

const container = ServiceContainer

describe('ServiceContainer', () => {

  it('should return non-null instances of bound services', () => {
    expect(container.get(PokemonNameBeautifier)).toBeInstanceOf(PokemonNameBeautifier)
    expect(container.get(PokemonService)).toBeInstanceOf(PokemonService)
  })
})
