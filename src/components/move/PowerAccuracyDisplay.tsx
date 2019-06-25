import React from 'react'
import { LoadingSpinner } from '../LoadingSpinner'

interface PowerAccuracyDisplayProps {
  power: number
  accuracy: number
}

export class PowerAccuracyDisplay extends React.Component<PowerAccuracyDisplayProps, any> {

  render() {
    return (
      <div className='tile notification is-success is-child is-vertical'>
        <p className='display__name'>POWER</p>
        <span className='display__value'>
          {this.props.power ? this.format(this.props.power) : <LoadingSpinner/>}
        </span>
        <p className='display__name'>ACCURACY</p>
        <span className='display__value'>
          {this.props.accuracy ? this.format(this.props.accuracy) : <LoadingSpinner/>}
        </span>
      </div>
    )
  }

  private format = (value: number) => value === -1 ? '--' : value
}
