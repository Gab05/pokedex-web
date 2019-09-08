import { injectable } from 'inversify'
import { NameBeautifier } from './NameBeautifier'

@injectable()
export class GenericNameBeautifier implements NameBeautifier {
  public beautifyName = (name: string): string =>
    name
      .toLowerCase()
      .split('_')
      .map(this.upperFirst)
      .join(' ')

  private upperFirst = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1)
}
