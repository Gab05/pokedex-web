import React from 'react'
import { PokemonService } from '../../services/pokemon/PokemonService'
import ServiceContainer from '../../services/ServiceContainer'
import { DropdownItem } from './DropdownItem'
import { ResourceType } from '../../models/ResourceType'
import './Dropdown.css'

interface DropdownProps {
  pokemonNames: string[]
}

export class Dropdown extends React.Component<DropdownProps, {}> {
  private readonly pokemonService = ServiceContainer.get(PokemonService)

  public render() {
    return (
      <div className='dropdown__content'>
        {this.dropdown()}
      </div>
    )
  }

  private dropdown() {
    const dropdown: JSX.Element[] = []

    for (const name of this.props.pokemonNames)
      dropdown.push(
        <DropdownItem name={name} type={ResourceType.POKEMON} key={name} />
      )
    this.sortByNumber(dropdown)

    return dropdown
  }

  private sortByNumber(dropdown: JSX.Element[]) {
    return dropdown.sort((a, b) => {
      return this.pokemonService.getNumberFromName(a.props.name)
        - this.pokemonService.getNumberFromName(b.props.name)
    })
  }
}
