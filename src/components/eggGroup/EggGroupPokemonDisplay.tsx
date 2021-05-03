import React, { Component } from 'react'
import './EggGroupPokemonDisplay.css'
import EggGroupsService from '../../services/eggGroups/EggGroupsService'
import ServiceContainer from '../../services/ServiceContainer'
import EggGroup from '../../models/eggGroups/EggGroup'
import { LoadingSpinner } from '../LoadingSpinner'

interface EggGroupPokemonDisplayState {
  eggGroup: EggGroup
}

export default class EggGroupPokemonDisplay extends Component<any, EggGroupPokemonDisplayState> {

  private readonly eggGroupsService = ServiceContainer.get(EggGroupsService)

  constructor(props: any) {
    super(props)

    this.state = {
      eggGroup: { name: '', pokemons: [] },
    }
  }

  componentDidMount(): void {
    this.eggGroupsService.fetchEggGroupByName(this.props.match.params.name)
      .then((eggGroup: EggGroup) => this.setState({ eggGroup }))
  }

  render() {
    const displayList = this.getPokemonDisplayList()

    return (
      <div>
        <section className='hero level egg-group-banner'>
          <h1>{this.props.match.params.name}</h1>
        </section>
        <section>
          {displayList}
        </section>
      </div>
    )
  }

  getPokemonDisplayList(): JSX.Element[] {
    if (!this.state.eggGroup)
      return [<LoadingSpinner key={0}/>]
    else
      return this.state.eggGroup.pokemons
        .map((pokemon: string) => (<a key={pokemon} href={`/pokemon/${pokemon}`}>{pokemon}</a>))
  }
}
