import 'reflect-metadata'
import React from 'react'
import eggLogo from '../../assets/egg.png'
import { ResourceType } from '../../models/ResourceType'
import { GenericNameBeautifier } from '../../services/name-beautifiers/GenericNameBeautifier'
import { NameBeautifier } from '../../services/name-beautifiers/NameBeautifier'
import { PokemonNameBeautifier } from '../../services/name-beautifiers/PokemonNameBeautifier'
import ServiceContainer from '../../services/ServiceContainer'
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
  private readonly genericNameBeautifier: NameBeautifier = ServiceContainer.get(GenericNameBeautifier)

  constructor(props: DropdownItemProps) {
    super(props)
    this.state = { selected: false }
  }

  render() {
    return (
      <a href={'/' + this.props.resourceType + '/' + this.props.name} className='dropdownitem'>
        <div className={'dropdownitem__row level is-mobile ' + this.props.resourceType.toLowerCase()}>
          {this.renderItemType()}
          <span className='level-right dropdownitem__type has-text-right'>{this.getResourceTypeDisplay()}</span>
        </div>
      </a>
    )
  }

  public getResourceTypeDisplay(): string {
    if (this.props.resourceType === ResourceType.EGG_GROUP)
      return 'egg group'
    return this.props.resourceType
  }

  private renderItemType = (): JSX.Element | undefined => {
    if (this.props.resourceType === ResourceType.POKEMON) return this.renderPokemonType()
    else if (this.props.resourceType === ResourceType.MOVE) return this.renderMoveType()
    else if (this.props.resourceType === ResourceType.EGG_GROUP) return this.renderEggGroup()
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
        <span className='level-item'>{this.genericNameBeautifier.beautifyName(this.props.name)}</span>
      </div>
    )
  }

  private renderEggGroup = (): JSX.Element => {
    return (
      <div className='dropdownitem__icon-container egg-group-item level-left'>
        <img
          src={eggLogo}
          className='level-item dropdownitem__icon'
          alt=''
        />
        <span className='level-item egg-group-item-name'>
          {this.genericNameBeautifier.beautifyName(this.props.name)}
        </span>
      </div>
    )
  }
}
