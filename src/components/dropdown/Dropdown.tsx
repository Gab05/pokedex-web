import React from 'react'
import { DropdownItem } from './DropdownItem'
import { ResourceType } from '../../models/ResourceType'
import './Dropdown.css'

interface DropdownProps {
  pokemonNames: string[]
}

export class Dropdown extends React.Component<DropdownProps, {}> {

  public render() {
    return (
      <div className='dropdown__content'>
        {this.dropdown()}
      </div>
    )
  }

  private dropdown() {
    const dropdown: JSX.Element[] = []

    this.props.pokemonNames.forEach((name) =>
      dropdown.push(<DropdownItem name={name} type={ResourceType.POKEMON} key={name} />))

    return dropdown
  }
}
