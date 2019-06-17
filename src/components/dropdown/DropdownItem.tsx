import React from 'react'
import { ResourceType } from '../../models/ResourceType'
import { NameBeautifier } from '../../services/nameBeautifiers/NameBeautifier'
import { PokemonNameBeautifier } from '../../services/nameBeautifiers/PokemonNameBeautifier'
import ServiceContainer from '../../services/ServiceContainer'
import './DropdownItem.css'

interface DropdownItemProps {
  resourceType: ResourceType
  name: string
}

interface DropdownItemState {
  selected: boolean
}

export class DropdownItem extends React.Component<DropdownItemProps, DropdownItemState> {

  private readonly pokemonNameBeautifier: NameBeautifier = ServiceContainer.get(PokemonNameBeautifier)

  constructor(props: DropdownItemProps) {
    super(props)
    this.state = { selected: false }
  }

  render() {
    return (
      <a href={'/' + this.props.resourceType.toLowerCase() + '/' + this.props.name} className='dropdownitem'>
        <div className={'dropdownitem__row level is-mobile ' + this.props.resourceType.toLowerCase()}>
          <div className='level-left'>
            {this.renderItemType()}
            <span>{this.pokemonNameBeautifier.beautifyName(this.props.name)}</span>
          </div>
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
      <div className='level-item dropdownitem__icon-container'>
        <img
          src={process.env.PUBLIC_URL + '/icons/pokemons/' + this.props.name + '.png'}
          className='dropdownitem__icon'
          alt=''
        />
      </div>
    )
  }

  private renderMoveType = (): JSX.Element => {
    return (
      <div className='level-item dropdownitem__icon-container'>
        --
      </div>
    )
  }
}
