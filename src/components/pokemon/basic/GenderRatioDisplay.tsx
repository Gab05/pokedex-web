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
          <span className='gender-ratio__male level-item'>♂</span>
          <span className='gender-ratio__colon level-item'>:</span>
          <span className='gender-ratio__value level-item'>
            {this.props.genderRatio.male ? this.props.genderRatio.male : <LoadingSpinner/>}%
          </span>
          <span className='gender-ratio__female level-item'>♀</span>
          <span className='gender-ratio__colon level-item'>:</span>
          <span className='gender-ratio__value level-item'>
            {this.props.genderRatio.female ? this.props.genderRatio.female : <LoadingSpinner/>}%
          </span>
        </div>
      </div>
    )
  }
}
