import 'reflect-metadata'
import { Container } from 'inversify'
import { MoveFactory } from '../factories/MoveFactory'
import { PokemonFactory } from '../factories/PokemonFactory'
import { AbilityService } from './ability/AbilityService'
import { MoveService } from './move/MoveService'
import { GenericNameBeautifier } from './nameBeautifiers/GenericNameBeautifier'
import { NameBeautifier } from './nameBeautifiers/NameBeautifier'
import { PokemonNameBeautifier } from './nameBeautifiers/PokemonNameBeautifier'
import { PokemonService } from './pokemon/PokemonService'

const ServiceContainer = new Container()

ServiceContainer.bind<NameBeautifier>(PokemonNameBeautifier).toSelf()
ServiceContainer.bind<PokemonService>(PokemonService).toSelf()
ServiceContainer.bind<PokemonFactory>(PokemonFactory).toSelf()
ServiceContainer.bind<GenericNameBeautifier>(GenericNameBeautifier).toSelf()
ServiceContainer.bind<MoveService>(MoveService).toSelf()
ServiceContainer.bind<MoveFactory>(MoveFactory).toSelf()
ServiceContainer.bind<AbilityService>(AbilityService).toSelf()

export default ServiceContainer
