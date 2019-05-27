import 'reflect-metadata'
import { Container } from 'inversify'
import { NameBeautifier } from './nameBeautifiers/NameBeautifier'
import { PokemonNameBeautifier } from './nameBeautifiers/PokemonNameBeautifier'

const ServiceContainer = new Container()

ServiceContainer.bind<NameBeautifier>(PokemonNameBeautifier).toSelf()

export default ServiceContainer
