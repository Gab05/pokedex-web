import React from 'react'
import { GenderRatio } from '../../../models/pokemon/basic/GenderRatio'
import { LoadingSpinner } from '../../LoadingSpinner'
import './GenderRatioDisplay.css'

interface GenderRatioDisplayProps {
  genderRatio: GenderRatio
}

export class GenderRatioDisplay extends React.Component<GenderRatioDisplayProps, any> {
  render() {
    return (
      <div>
        <div className='level is-mobile'>
          <div className='level-item'>
            <div className='gender-ratio__male'>♂ </div>
            <div className='gender-ratio__value'>
              {this.props.genderRatio.male ? `: ${this.props.genderRatio.male}` : <LoadingSpinner/>}%
            </div>
          </div>
          <div className='level-item'>
            <div className='gender-ratio__female'>♀ </div>
            <div className='gender-ratio__value'>
              {this.props.genderRatio.female ? `: ${this.props.genderRatio.female}` : <LoadingSpinner/>}%
            </div>
          </div>
        </div>
      </div>
    )
  }
}
