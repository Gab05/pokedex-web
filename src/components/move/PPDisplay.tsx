import React from 'react'
import { LoadingSpinner } from '../LoadingSpinner'

interface PPDisplayProps {
  PP: number
}

export class PPDisplay extends React.Component<PPDisplayProps, any> {

  render() {
    return (
      <div className='tile notification is-success is-child is-vertical'>
        <p className='display__name'>PP</p>
        <span className='display__value'>
          {this.props.PP ? this.display(this.props.PP) : <LoadingSpinner/>}
        </span>
        <p className='display__name'>MAX PP</p>
        <span className='display__value'>
          {this.props.PP ? this.display(this.maxPPValue()) : <LoadingSpinner/>}
        </span>
      </div>
    )
  }

  private display = (PP: number) => PP + ' / ' + PP

  private maxPPValue = () => this.props.PP * 1.6
}
