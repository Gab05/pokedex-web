import React from 'react'
import { Ability } from '../../../models/pokemon/ability/Ability'
import { AbilityService } from '../../../services/ability/AbilityService'
import ServiceContainer from '../../../services/ServiceContainer'
import { AbilityDisplay } from './AbilityDisplay'

interface AbilitiesDisplayProps {
  firstName: string
  secondName: string
  hiddenName: string
}

interface AbilitiesDisplayState {
  first?: Ability
  second?: Ability
  hidden?: Ability
}

export class AbilitiesDisplay extends React.Component<AbilitiesDisplayProps, AbilitiesDisplayState> {

  private readonly abilityService = ServiceContainer.get(AbilityService)

  constructor(props: any) {
    super(props)

    this.state = {}
  }

  componentDidUpdate = (): void => {
    if (this.props.firstName && !this.state.first) this.fetchFirstAbility()
    if (this.props.secondName && !this.state.second) this.fetchSecondAbility()
    if (this.props.hiddenName && !this.state.hidden) this.fetchHiddenAbility()
  }

  render() {
    return (
      <div className='container'>
        <AbilityDisplay
          title=''
          value={this.props.firstName}
          description={this.state.first ? this.state.first.description : ''}
        />
        <AbilityDisplay
          title=''
          value={this.props.secondName}
          description={this.state.second ? this.state.second.description : ''}
        />
        <AbilityDisplay
          title='(Hidden)'
          value={this.props.hiddenName}
          description={this.state.hidden ? this.state.hidden.description : ''}
        />
      </div>
    )
  }

  private fetchFirstAbility = () => {
    this.abilityService.fetchAbility(this.props.firstName)
      .then((ability: Ability) => {
        this.setState((previous: AbilitiesDisplayState) => ({ ...previous, first: ability }))
      })
  }

  private fetchSecondAbility = () => {
    this.abilityService.fetchAbility(this.props.secondName)
      .then((ability: Ability) => {
        this.setState((previous: AbilitiesDisplayState) => ({ ...previous, second: ability }))
      })
  }

  private fetchHiddenAbility = () => {
    this.abilityService.fetchAbility(this.props.hiddenName)
      .then((ability: Ability) => {
        this.setState((previous: AbilitiesDisplayState) => ({ ...previous, hidden: ability }))
      })
  }
}
