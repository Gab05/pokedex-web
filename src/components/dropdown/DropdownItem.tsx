import React from 'react'
import ServiceContainer from '../../services/ServiceContainer'
import { NameBeautifier } from '../../services/nameBeautifiers/NameBeautifier'
import { ResourceType } from '../../models/ResourceType'
import { PokemonNameBeautifier } from '../../services/nameBeautifiers/PokemonNameBeautifier'
import './DropdownItem.css'

interface DropdownItemProps {
  type: ResourceType
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
      <a href={'/'+this.props.type.toLowerCase() + '/' + this.props.name} className='dropdownitem'>
        <div className='level dropdownitem__row'>
          <div className='level-left'>
            <img
              src={process.env.PUBLIC_URL + '/icons/pokemons/' + this.props.name + '.png'}
              className='level-item dropdownitem__icon'
              alt=''
            />
            <span>{this.pokemonNameBeautifier.beautifyName(this.props.name)}</span>
          </div>
          <span className='level-right dropdownitem__type has-text-right'>{this.props.type}</span>
        </div>
      </a>
    )
  }
}
