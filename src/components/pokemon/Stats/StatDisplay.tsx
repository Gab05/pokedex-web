import React from 'react'

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
      <div className='level'>
        <h2 className='level-item'>{this.props.name}</h2>
        <progress
          className={'progress ' + this.calculateColor(this.props.value, 200)}
          value={this.props.value}
          max={200}
        />
        <h2 className='level-item'>{this.props.value}</h2>
      </div>
    )
  }

  private calculateColor = (actual: number, max: number): string => {
    return this.COLOR_CLASS_MAP[Math.floor((actual/max) * this.COLOR_CLASS_MAP.length)]
  }
}
