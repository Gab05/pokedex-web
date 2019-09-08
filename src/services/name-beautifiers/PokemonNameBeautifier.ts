import 'reflect-metadata'
import { NameBeautifier } from './NameBeautifier'
import { injectable } from 'inversify'

@injectable()
export class PokemonNameBeautifier implements NameBeautifier {

  beautifyName = (name: string): string =>
    this.handlePokemonNameExceptions(
      this.capitalizeEachWord(name.replace(/_/g, ' '))
    )

  private capitalizeEachWord = (str: string): string =>
    str
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

  private handlePokemonNameExceptions = (name: string): string => {
    switch (name) {
      case 'Mr Mime':
        return 'Mr. Mime'
      case 'Mime Jr':
        return 'Mime Jr.'
      case 'Porygon Z':
        return 'Porygon-Z'
      case 'Nidoran M':
        return 'Nidoran♂'
      case 'Nidoran F':
        return 'Nidoran♀'
      case 'Jangmo O':
        return 'Jangmo-o'
      case 'Hakamo O':
        return 'Hakamo-o'
      case 'Kommo O':
        return 'Kommo-o'
      case 'Ho Oh':
        return 'Ho-Oh'
      case 'Farfetch D':
        return `Farfetch'd`
      default:
        return name
    }
  }
}
