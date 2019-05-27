import { NameBeautifier } from './NameBeautifier'

export class PokemonNameBeautifier implements NameBeautifier {

  beautifyName = (name: string): string => {
    name.replace('_', ' ')
    name = this.capitalizeEachWord(name)
    return this.handlePokemonNameExceptions(name)
  }

  private capitalizeEachWord = (str: string) => {
    const splitStr = str.toLowerCase().split(' ')

    for (let i = 0; i < splitStr.length; i++)
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)

    return splitStr.join(' ')
  }

  private handlePokemonNameExceptions = (name: string) => {
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
      default:
        return name
    }
  }
}
