import React from 'react'
import { AbilityDisplay } from './AbilityDisplay'

interface AbilitiesDisplayProps {
  first: string
  second: string
  hidden: string
}

interface AbilitiesDisplayState {
  firstDescription: string
  secondDescription: string
  hiddenDescription: string
}

export class AbilitiesDisplay extends React.Component<AbilitiesDisplayProps, AbilitiesDisplayState> {

  constructor(props: any) {
    super(props)

    this.state = {
      firstDescription: '',
      secondDescription: '',
      hiddenDescription: '',
    }
  }

  render() {
    return (
      <div className='container'>
        <AbilityDisplay
          title='1'
          value={this.props.first}
          description={this.state.firstDescription ? this.state.firstDescription : ''}
        />
        <AbilityDisplay
          title='2'
          value={this.props.second}
          description={this.state.secondDescription ? this.state.secondDescription : ''}
        />
        <AbilityDisplay
          title='Hidden'
          value={this.props.hidden}
          description={this.state.hiddenDescription ? this.state.hiddenDescription : ''}
        />
      </div>
    )
  }
}
