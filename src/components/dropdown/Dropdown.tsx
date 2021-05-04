import React from 'react'
import ServiceContainer from '../../services/ServiceContainer'
import { SearchResult } from '../../models/SearchResult'
import { ResourceType } from '../../models/ResourceType'
import { MoveService } from '../../services/move/MoveService'
import { DropdownItem } from './DropdownItem'
import './Dropdown.css'

interface DropdownProps {
  pokemonNames: string[]
  moveNames: string[]
  eggGroupNames: string[]
}

export class Dropdown extends React.Component<DropdownProps, any> {

  private moveService = ServiceContainer.get(MoveService)

  public render() {
    return (
      <div className='dropdown__content'>
        {this.dropdown()}
      </div>
    )
  }

  private dropdown() {
    const dropdown: JSX.Element[] = []
    const results = this.sortResults()

    results.forEach((r) =>
      dropdown.push(<DropdownItem name={r.name} resourceType={r.resourceType} type={r.type} key={r.name}/>))

    return dropdown
  }

  private sortResults = () => {
    const results: SearchResult[] = []

    this.props.pokemonNames.forEach((pokemon) =>
      results.push({ name: pokemon, resourceType: ResourceType.POKEMON}))

    this.props.moveNames.forEach((move) =>
      results.push({ name: move, resourceType: ResourceType.MOVE, type: this.moveService.getType(move) }))

    this.props.eggGroupNames.forEach((eggGroup) =>
      results.push({ name: eggGroup, resourceType: ResourceType.EGG_GROUP }))

    results.sort((a: SearchResult, b: SearchResult) => a.name.localeCompare(b.name))
    return results
  }
}
