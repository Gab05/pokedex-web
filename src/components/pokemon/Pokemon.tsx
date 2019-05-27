import React from 'react'
import ServiceContainer from '../../services/ServiceContainer'
import { PokemonService } from '../../services/PokemonService'
import { RouteProps } from 'react-router'

interface PokemonState {
  name: string
}

export class Pokemon extends React.Component<any & RouteProps, PokemonState> {

  private readonly pokemonService = ServiceContainer.get(PokemonService)

  constructor(props: any) {
    super(props)
    this.state = { name: this.props.match.params.name }
  }

  render() {
    return (
      <div className='container'>
        <h1 className='hero is-link'>
          #{this.pokemonService.getNumberFromName(this.state.name)} {this.state.name}
        </h1>
      </div>
    )
  }
}
