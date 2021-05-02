import React from 'react'
import ServiceContainer from '../../../services/ServiceContainer'
import { GenericNameBeautifier } from '../../../services/name-beautifiers/GenericNameBeautifier'
import { LoadingSpinner } from '../../LoadingSpinner'
import eggIcon from '../../../assets/egg.png'

interface EggGroupsDisplayProps {
  eggGroups?: string[]
}

export class EggGroupsDisplay extends React.Component<EggGroupsDisplayProps, any> {

  private readonly nameBeautifier = ServiceContainer.get(GenericNameBeautifier)

  render() {
    return (
      <div className='level is-mobile'>
        <span className='capture-rate__value level-item'>
          {this.props.eggGroups ? this.getEggGroupLink() : <LoadingSpinner/>}
        </span>
      </div>
    )
  }

  private getEggGroupLink() {
    if (this.props.eggGroups && !this.props.eggGroups.length)
      return <div>CANNOT BREED</div>

    const links = (this.props.eggGroups || [])
      .map((eggGroup: string) => (
        <a href={`/eggGroups/${eggGroup}`} key={eggGroup}>
          {this.nameBeautifier.beautifyName(eggGroup)}
        </a>
      ))

    return (
      <div className='egg-group-container'>
        <img src={eggIcon} alt=''/>
        {links}
      </div>
    )
  }
}
