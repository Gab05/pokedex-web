import React from 'react'
import { ExpGrowth } from '../../../models/pokemon/basic/ExpGrowth'
import { LoadingSpinner } from '../../LoadingSpinner'
import './ExpGrowthDisplay.css'

interface ExpGrowthDisplayProps {
  exp: number
}

export class ExpGrowthDisplay extends React.Component<ExpGrowthDisplayProps, any> {

  render() {
    return (
      <p className='expgrowth'>
        {this.props.exp ? <p>{this.props.exp} {ExpGrowth[this.props.exp]}</p> : <LoadingSpinner/>}
      </p>
    )
  }
}
