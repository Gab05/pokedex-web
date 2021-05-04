import React, { Component } from 'react'
import EggGroupsService from '../../services/eggGroups/EggGroupsService'
import ServiceContainer from '../../services/ServiceContainer'
import EggGroup from '../../models/eggGroups/EggGroup'
import { LoadingSpinner } from '../LoadingSpinner'
import { GenericNameBeautifier } from '../../services/name-beautifiers/GenericNameBeautifier'
import { EggGroupTitle } from './title/EggGroupTitle'
import './EggGroupDisplay.css'
import EggGroupPokemonItem from './pokemon/EggGroupPokemonItem'
import { PokemonService } from '../../services/pokemon/PokemonService'
import { PokemonNameBeautifier } from '../../services/name-beautifiers/PokemonNameBeautifier'

interface EggGroupDisplayState {
  eggGroup: EggGroup
}

export default class EggGroupDisplay extends Component<any, EggGroupDisplayState> {

  private readonly eggGroupsService = ServiceContainer.get(EggGroupsService)
  private readonly pokemonService = ServiceContainer.get(PokemonService)
  private readonly nameBeautifier = ServiceContainer.get(GenericNameBeautifier)
  private readonly pokemonNameBeautifier = ServiceContainer.get(PokemonNameBeautifier)

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
    return (
      <div className='egg-group-display'>
        <EggGroupTitle
          name={this.props.match.params.name}
          beautifiedName={this.nameBeautifier.beautifyName(this.props.match.params.name)}
        />

        <div className='pokemon-list-display container tile is-parent'>
          {this.getPokemonDisplayList()}
        </div>
      </div>
    )
  }

  getPokemonDisplayList(): JSX.Element | JSX.Element[] {
    return this.state.eggGroup
      ? this.state.eggGroup.pokemons.map((p: string) => (
          <EggGroupPokemonItem
            key={p}
            pokemonName={p}
            beautifiedName={this.pokemonNameBeautifier.beautifyName(p)}
            spriteUrl={this.pokemonService.getNormalSpriteUrl(p)}
          />
        ))
      : <LoadingSpinner/>
  }
}
