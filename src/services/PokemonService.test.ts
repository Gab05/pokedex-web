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

    it('should contain all 807 pokemons (excluding alolans, alternate forms, mega evolutions) from 7th gen', () => {
      expect(service.getPokemonList().length).toBe(807)
    })
  })

  describe('when getting a pokemon number from its name', () => {
    it('should return the right number', () => {
      expect(service.getNumberFromName('bulbasaur')).toBe(1)
      expect(service.getNumberFromName('arceus')).toBe(493)
      expect(service.getNumberFromName('zeraora')).toBe(807)
    })
  })
})
