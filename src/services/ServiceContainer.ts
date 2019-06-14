import 'reflect-metadata'
import { Container } from 'inversify'
import { PokemonFactory } from '../factories/PokemonFactory'
import { NameBeautifier } from './nameBeautifiers/NameBeautifier'
import { PokemonNameBeautifier } from './nameBeautifiers/PokemonNameBeautifier'
import { PokemonService } from './pokemon/PokemonService'

const ServiceContainer = new Container()

ServiceContainer.bind<NameBeautifier>(PokemonNameBeautifier).toSelf()
ServiceContainer.bind<PokemonService>(PokemonService).toSelf()
ServiceContainer.bind<PokemonFactory>(PokemonFactory).toSelf()

export default ServiceContainer
