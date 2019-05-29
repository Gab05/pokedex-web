import React from 'react'
import { DropdownItem } from './DropdownItem'
import { ResourceType } from '../../models/ResourceType'
import './Dropdown.css'

interface DropdownProps {
  pokemonNames: string[]
}

export class Dropdown extends React.Component<DropdownProps, {}> {
  render() {
    const displayedItems: JSX.Element[] = []

    for (const name of this.props.pokemonNames)
      displayedItems.push(<DropdownItem name={name} type={ResourceType.POKEMON} key={name} />)

    displayedItems.sort((a, b) => {
      return a.props.name.localeCompare(b.props.name)
    })

    return (
      <div className='dropdown__content'>
        {displayedItems}
      </div>
    )
  }
}
