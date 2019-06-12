import React from 'react'

interface StatDisplayProps {
  name?: string
  value?: number
}

export class StatDisplay extends React.Component<StatDisplayProps, any> {

  render() {
    return (
      <div>
        {this.props.name} {this.props.value}
      </div>
    )
  }
}
