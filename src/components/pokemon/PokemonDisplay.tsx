import React from 'react'
import { Pokemon } from '../../models/pokemon/Pokemon'
import ServiceContainer from '../../services/ServiceContainer'
import { PokemonService } from '../../services/PokemonService'
import { RouteProps } from 'react-router'

interface PokemonState {
  pokemon?: Pokemon
}

export class PokemonDisplay extends React.Component<any & RouteProps, PokemonState> {

  private readonly pokemonService = ServiceContainer.get(PokemonService)

  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className='container'>
        <div className='hero is-link'>
          #{this.state.pokemon!.nationalNumber} {this.state.pokemon!.name}
        </div>
      </div>
    )
  }
}
