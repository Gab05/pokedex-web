import { injectable } from 'inversify'
import { NameBeautifier } from './NameBeautifier'

@injectable()
export class MoveNameBeautifier implements NameBeautifier {

  public beautifyName = (name: string): string => name.charAt(0).toUpperCase() + name.slice(1).replace(/_/g, ' ')
}
