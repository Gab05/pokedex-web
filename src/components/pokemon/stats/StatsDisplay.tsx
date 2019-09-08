import React from 'react'
import { Stats } from '../../../models/pokemon/stats/Stats'
import { StatDisplay } from './StatDisplay'
import './StatsDisplay.css'

interface StatsDisplayProps {
  stats: Stats
}

export class StatsDisplay extends React.Component<StatsDisplayProps, any> {
  render = (): JSX.Element => (
    <div className='stats__display'>
      <StatDisplay name='HP' value={this.props.stats.hp}/>
      <StatDisplay name='ATK' value={this.props.stats.atk}/>
      <StatDisplay name='DEF' value={this.props.stats.def}/>
      <StatDisplay name='SPATK' value={this.props.stats.spatk}/>
      <StatDisplay name='SPDEF' value={this.props.stats.spdef}/>
      <StatDisplay name='SPEED' value={this.props.stats.speed}/>
    </div>
  )
}
