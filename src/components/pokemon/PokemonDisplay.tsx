import React from 'react'
import { Pokemon } from '../../models/pokemon/Pokemon'
import { PokemonNameBeautifier } from '../../services/nameBeautifiers/PokemonNameBeautifier'
import ServiceContainer from '../../services/ServiceContainer'
import { PokemonService } from '../../services/PokemonService'
import { RouteProps } from 'react-router'
import { PokemonTitle } from './PokemonTitle'

interface PokemonState {
  name: string
  pokemon: Pokemon
}

export class PokemonDisplay extends React.Component<any & RouteProps, PokemonState> {

  private readonly pokemonService = ServiceContainer.get(PokemonService)
  private readonly pokemonNameBeautifier = ServiceContainer.get(PokemonNameBeautifier)

  constructor(props: any) {
    super(props)

    this.state = {
      name: this.props.match.params.name,
      pokemon: {},
    }
  }

  componentDidMount(): void {
    this.pokemonService.fetchPokemonByName(this.state.name).then((fetchedPokemon) => {
      this.setState(() => {
        return { pokemon: fetchedPokemon }
      })
    })
  }

  render() {
    return (
      <div>
        <PokemonTitle
          name={this.pokemonNameBeautifier.beautifyName(this.state.name)}
          nationalNumber={this.pokemonService.getNumberFromName(this.state.name)}
        />
        <div>
          TYPE: {this.state.pokemon!.typing}
        </div>
      </div>
    )
  }
}
