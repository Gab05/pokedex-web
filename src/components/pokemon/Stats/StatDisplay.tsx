import React from 'react'
import './StatDisplay.css'

interface StatDisplayProps {
  name: string
  value: number
}

export class StatDisplay extends React.Component<StatDisplayProps, any> {

  private COLOR_CLASS_MAP = [
    'is-danger',
    'is-warning',
    'is-success',
    'is-primary',
    'is-link',
  ]

  render() {
    return (
      <div className='level stat__display'>
          <h2 className='stat__name level-item has-text-left'>{this.props.name}</h2>
          <h2 className='stat__value level-item has-text-right'>{this.props.value}</h2>
          <progress
            className={'progress level-item stat__bar box ' + this.calculateColor(this.props.value, 200)}
            value={this.props.value}
            max={200}
          />
      </div>
    )
  }

  private calculateColor = (actual: number, max: number): string => {
    return actual <= max
      ? this.COLOR_CLASS_MAP[Math.floor((actual/max) * this.COLOR_CLASS_MAP.length)]
      : 'is-link'
  }
}
