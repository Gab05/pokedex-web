import React from 'react'
import { LoadingSpinner } from '../../LoadingSpinner'
import './CaptureRateDisplay.css'

interface CaptureRateDisplayProps {
  captureRate: string
}

export class CaptureRateDisplay extends React.Component<CaptureRateDisplayProps, any> {

  render() {
    return (
      <div className='level'>
        <span className='capture-rate__title level-item'>
          Capture rate:
        </span>
        <span className='capture-rate__value level-item'>
          {this.props.captureRate ? this.props.captureRate : <LoadingSpinner/>}
        </span>
      </div>
    )
  }
}
