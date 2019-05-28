import 'mocha'
import 'chai'
import { PokemonNameBeautifier } from './PokemonNameBeautifier'

const beautifier = new PokemonNameBeautifier()

describe('PokemonNameBeautifier', () => {
  it('should correctly beautify standard pokémon names', () => {
    expect(beautifier.beautifyName('celebi')).toBe('Celebi')
    expect(beautifier.beautifyName('charmander')).toBe('Charmander')
    expect(beautifier.beautifyName('tapu_koko')).toBe('Tapu Koko')
  })

  it('should beautify pokemon name exceptions correctly', () => {
    expect(beautifier.beautifyName('ho_oh')).toBe('Ho-Oh')
    expect(beautifier.beautifyName('nidoran_m')).toBe('Nidoran♂')
    expect(beautifier.beautifyName('nidoran_f')).toBe('Nidoran♀')
    expect(beautifier.beautifyName('mr_mime')).toBe('Mr. Mime')
    expect(beautifier.beautifyName('mime_jr')).toBe('Mime Jr.')
    expect(beautifier.beautifyName('kommo_o')).toBe('Kommo-o')
  })
})
