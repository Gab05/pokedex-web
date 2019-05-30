import React from 'react'
import { Pokemon } from '../../models/pokemon/Pokemon'
import ServiceContainer from '../../services/ServiceContainer'
import { PokemonService } from '../../services/PokemonService'
import { RouteProps } from 'react-router'

interface PokemonState {
  name: string
  pokemon: Pokemon
}

export class PokemonDisplay extends React.Component<any & RouteProps, PokemonState> {

  private readonly pokemonService = ServiceContainer.get(PokemonService)

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
        <div className='hero is-link'>
          #{this.pokemonService.getNumberFromName(this.state.name)} {this.state.name}
        </div>
        <div>
          TYPE: {this.state.pokemon!.typing}
        </div>
      </div>
    )
  }
}
