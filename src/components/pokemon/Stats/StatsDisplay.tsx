import React from 'react'
import { Stats } from '../../../models/pokemon/stats/Stats'
import { StatDisplay } from './StatDisplay'

interface StatsDisplayProps {
  stats?: Stats
}

export class StatsDisplay extends React.Component<StatsDisplayProps, any> {
  render() {
    return (
      <div>
        <StatDisplay name='HP' value={this.props.stats ? this.props.stats.hp : undefined}/>
        <StatDisplay name='ATK' value={this.props.stats ? this.props.stats.atk: undefined}/>
        <StatDisplay name='DEF' value={this.props.stats ? this.props.stats.def : undefined}/>
        <StatDisplay name='SPATK' value={this.props.stats ? this.props.stats.spatk : undefined}/>
        <StatDisplay name='SPDEF' value={this.props.stats ? this.props.stats.spdef: undefined}/>
        <StatDisplay name='SPEED' value={this.props.stats ? this.props.stats.speed : undefined}/>
      </div>
    )
  }
}
