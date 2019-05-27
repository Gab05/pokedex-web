import { interfaces, Container } from 'inversify'
import { PokemonNameBeautifier } from './nameBeautifiers/PokemonNameBeautifier'

export class ServiceContainer {

  private readonly container: interfaces.Container

  constructor() {
    this.container = new Container()

    this.container.bind(PokemonNameBeautifier).toSelf()
  }

  getContainer = () => {
    return this.container
  }
}
