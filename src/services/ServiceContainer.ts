import 'reflect-metadata'
import { Container } from 'inversify'
import { MoveFactory } from '../factories/MoveFactory'
import { PokemonFactory } from '../factories/PokemonFactory'
import { AbilityService } from './ability/AbilityService'
import { MoveService } from './move/MoveService'
import { GenericNameBeautifier } from './name-beautifiers/GenericNameBeautifier'
import { NameBeautifier } from './name-beautifiers/NameBeautifier'
import { PokemonNameBeautifier } from './name-beautifiers/PokemonNameBeautifier'
import { PokemonService } from './pokemon/PokemonService'
import EggGroupsService from './eggGroups/EggGroupsService'

const ServiceContainer = new Container()

ServiceContainer.bind<NameBeautifier>(GenericNameBeautifier).toSelf()
ServiceContainer.bind<PokemonService>(PokemonService).toSelf()
ServiceContainer.bind<PokemonFactory>(PokemonFactory).toSelf()
ServiceContainer.bind<PokemonNameBeautifier>(PokemonNameBeautifier).toSelf()
ServiceContainer.bind<MoveService>(MoveService).toSelf()
ServiceContainer.bind<MoveFactory>(MoveFactory).toSelf()
ServiceContainer.bind<AbilityService>(AbilityService).toSelf()
ServiceContainer.bind<EggGroupsService>(EggGroupsService).toSelf()

export default ServiceContainer
