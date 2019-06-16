import React from 'react'
import { LoadingSpinner } from '../../LoadingSpinner'

interface EggStepsDisplayProps {
  steps: number
}

export class EggStepsDisplay extends React.Component<EggStepsDisplayProps, any> {

  render() {
    return (
      <p>{this.props.steps ? this.props.steps : <LoadingSpinner/>}</p>
    )
  }
}
