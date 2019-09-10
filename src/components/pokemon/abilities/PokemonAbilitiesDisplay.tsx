import React, { Component } from 'react'
import ServiceContainer from '../../../services/ServiceContainer'
import { Ability } from '../../../models/pokemon/ability/Ability'
import { AbilityService } from '../../../services/ability/AbilityService'
import { PokemonAbilityDisplay } from './PokemonAbilityDisplay'

interface PokemonAbilitiesDisplayProps {
  firstName: string
  secondName?: string
  hiddenName?: string
}

interface PokemonAbilitiesDisplayState {
  first?: Ability
  second?: Ability
  hidden?: Ability
}

export class PokemonAbilitiesDisplay extends Component<PokemonAbilitiesDisplayProps, PokemonAbilitiesDisplayState> {

  private readonly abilityService = ServiceContainer.get(AbilityService)

  constructor(props: any) {
    super(props)

    this.state = {}
  }

  componentDidUpdate = (): void => {
    if (!this.state.first) this.fetchFirstAbility()
    if (!this.state.second) this.fetchSecondAbility()
    if (!this.state.hidden) this.fetchHiddenAbility()
  }

  render = (): JSX.Element => (
    <div className='container'>
      <PokemonAbilityDisplay
        title=''
        value={this.props.firstName}
        description={this.state.first ? this.state.first.description : ''}
      />
      <PokemonAbilityDisplay
        title=''
        value={this.props.secondName ? this.props.secondName: ''}
        description={this.state.second ? this.state.second.description : ''}
      />
      <PokemonAbilityDisplay
        title='(Hidden)'
        value={this.props.hiddenName ? this.props.hiddenName: ''}
        description={this.state.hidden ? this.state.hidden.description : ''}
      />
    </div>
  )

  private fetchFirstAbility = (): void => {
    this.abilityService
      .fetchAbility(this.props.firstName)
      .then((ability: Ability) =>
        this.setState((previous: PokemonAbilitiesDisplayState) =>
          ({ ...previous, first: ability })
        )
      )
  }

  private fetchSecondAbility = (): void => {
    if (this.props.secondName) this.abilityService
      .fetchAbility(this.props.secondName)
      .then((ability: Ability) =>
        this.setState((previous: PokemonAbilitiesDisplayState) =>
          ({ ...previous, second: ability })
        )
      )
  }

  private fetchHiddenAbility = (): void => {
    if (this.props.hiddenName) this.abilityService
      .fetchAbility(this.props.hiddenName)
      .then((ability: Ability) =>
        this.setState((previous: PokemonAbilitiesDisplayState) =>
          ({ ...previous, hidden: ability })
        )
      )
  }
}
