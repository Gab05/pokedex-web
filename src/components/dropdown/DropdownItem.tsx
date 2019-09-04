import React from 'react'
import ServiceContainer from '../../services/ServiceContainer'
import { NameBeautifier } from '../../services/nameBeautifiers/NameBeautifier'
import { GenericNameBeautifier } from '../../services/nameBeautifiers/GenericNameBeautifier'
import { ResourceType } from '../../models/ResourceType'
import { PokemonNameBeautifier } from '../../services/nameBeautifiers/PokemonNameBeautifier'
import './DropdownItem.css'

interface DropdownItemProps {
  resourceType: ResourceType
  name: string
  type?: string
}

interface DropdownItemState {
  selected: boolean
}

export class DropdownItem extends React.Component<DropdownItemProps, DropdownItemState> {

  private readonly pokemonNameBeautifier: NameBeautifier = ServiceContainer.get(PokemonNameBeautifier)
  private readonly moveNameBeautifier: NameBeautifier = ServiceContainer.get(GenericNameBeautifier)

  constructor(props: DropdownItemProps) {
    super(props)
    this.state = { selected: false }
  }

  render() {
    return (
      <a href={'/' + this.props.resourceType.toLowerCase() + '/' + this.props.name} className='dropdownitem'>
        <div className={'dropdownitem__row level is-mobile ' + this.props.resourceType.toLowerCase()}>
          {this.renderItemType()}
          <span className='level-right dropdownitem__type has-text-right'>{this.props.resourceType}</span>
        </div>
      </a>
    )
  }

  private renderItemType = (): JSX.Element | undefined => {
    if (this.props.resourceType === ResourceType.POKEMON) return this.renderPokemonType()
    else if (this.props.resourceType === ResourceType.MOVE) return this.renderMoveType()
  }

  private renderPokemonType = (): JSX.Element => {
    return (
      <div className='dropdownitem__icon-container level-left'>
        <img
          src={process.env.PUBLIC_URL + '/icons/pokemons/' + this.props.name + '.png'}
          className='level-item dropdownitem__icon'
          alt=''
        />
        <span className='level-item'>{this.pokemonNameBeautifier.beautifyName(this.props.name)}</span>
      </div>
    )
  }

  private renderMoveType = (): JSX.Element => {
    return (
      <div className='dropdownitem__icon-container level-left'>
        <img
          src={process.env.PUBLIC_URL + '/icons/types/' + this.props.type!.toLowerCase() + '.gif'}
          className='level-item dropdownitem__icon'
          alt=''
        />
        <span className='level-item'>{this.moveNameBeautifier.beautifyName(this.props.name)}</span>
      </div>
    )
  }
}
