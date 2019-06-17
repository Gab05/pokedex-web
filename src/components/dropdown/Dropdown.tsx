import React from 'react'
import { ResourceType } from '../../models/ResourceType'
import './Dropdown.css'
import { DropdownItem } from './DropdownItem'

interface DropdownProps {
  pokemonNames: string[]
  moveNames: string[]
}

export class Dropdown extends React.Component<DropdownProps, any> {

  public render() {
    return (
      <div className='dropdown__content'>
        {this.dropdown()}
      </div>
    )
  }

  private dropdown() {
    const dropdown: JSX.Element[] = []

    this.props.pokemonNames.forEach((pokemonName: string) =>
      dropdown.push(<DropdownItem resourceType={ResourceType.POKEMON} name={pokemonName} key={pokemonName} />))

    this.props.moveNames.forEach((moveName: string) =>
      dropdown.push(<DropdownItem resourceType={ResourceType.MOVE} name={moveName} key={moveName}/>))

    return dropdown
  }
}
