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
          <StatDisplay name='HP' value={this.props.stats ? this.props.stats.hp : 0}/>
          <StatDisplay name='ATK' value={this.props.stats ? this.props.stats.atk : 0}/>
          <StatDisplay name='DEF' value={this.props.stats ? this.props.stats.def : 0}/>
          <StatDisplay name='SPATK' value={this.props.stats ? this.props.stats.spatk : 0}/>
          <StatDisplay name='SPDEF' value={this.props.stats ? this.props.stats.spdef : 0}/>
          <StatDisplay name='SPEED' value={this.props.stats ? this.props.stats.speed : 0}/>
        </div>
    )
  }
}
