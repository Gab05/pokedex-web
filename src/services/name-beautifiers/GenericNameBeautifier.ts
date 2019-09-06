import { injectable } from 'inversify'
import { NameBeautifier } from './NameBeautifier'

@injectable()
export class GenericNameBeautifier implements NameBeautifier {
  beautifyName = (name: string): string => {
    let beautified = ''
    for (const word of name.split('_')) beautified += `${this.upperFirst(word)} `
    return beautified.trim()
  }

  private upperFirst = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
}
