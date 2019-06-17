import React from 'react'
import { LoadingSpinner } from '../../LoadingSpinner'
import './StatDisplay.css'

interface StatDisplayProps {
  name: string
  value: number
}

export class StatDisplay extends React.Component<StatDisplayProps, any> {

  private COLOR_CLASS_MAP = [
    'is-danger',
    'is-orange',
    'is-warning',
    'is-success',
    'is-primary',
    'is-link',
  ]

  render() {
    return (
      <div className='stat__display level is-mobile'>
          <div className='stat__name level-item has-text-left'>
            {this.props.name}
          </div>
          <div className='stat__value level-item has-text-right'>
            {this.props.value ? this.props.value : <LoadingSpinner/>}
          </div>
          <progress
            className={'progress level-item stat__bar box ' + this.calculateColor(this.props.value, 200)}
            value={this.props.value ? this.props.value : undefined}
            max={200}
          />
      </div>
    )
  }

  private calculateColor = (actual: number, max: number): string => {
    return actual < max
      ? this.COLOR_CLASS_MAP[Math.floor((actual/max) * this.COLOR_CLASS_MAP.length)]
      : this.COLOR_CLASS_MAP[this.COLOR_CLASS_MAP.length - 1]
  }
}
