import 'reflect-metadata'
import { Container } from 'inversify'
import { NameBeautifier } from './nameBeautifiers/NameBeautifier'
import { PokemonNameBeautifier } from './nameBeautifiers/PokemonNameBeautifier'
import { PokemonService } from './pokemon/PokemonService'

const ServiceContainer = new Container()

ServiceContainer.bind<NameBeautifier>(PokemonNameBeautifier).toSelf()
ServiceContainer.bind<PokemonService>(PokemonService).toSelf()

export default ServiceContainer
