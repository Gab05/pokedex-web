import 'chai'
import 'mocha'
import { PokemonService } from './PokemonService'

const service = new PokemonService()

describe('PokemonService', () => {
  describe('when getting pokémon list from assets', () => {
    it('should return a non-empty list', () => {
      expect(service.getPokemonList()).not.toBeNull()
      expect(service.getPokemonList()).not.toBeUndefined()
      expect(service.getPokemonList().length).not.toBe(0)
    })

    it('should contain all 807 pokemons + 107 megas/alolans/alternate forms', () => {
      expect(service.getPokemonList().length).toBe(914)
    })
  })
})
