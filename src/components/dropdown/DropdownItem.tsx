import React from 'react'
import ServiceContainer from '../../services/ServiceContainer'
import { NameBeautifier } from '../../services/nameBeautifiers/NameBeautifier'
import { DropdownItemType } from './DropdownItemType'
import { PokemonNameBeautifier } from '../../services/nameBeautifiers/PokemonNameBeautifier'
import './DropdownItem.css'

interface DropdownItemProps {
  type: DropdownItemType
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
      <a className='dropdownitem level' href='/'>
        <div className='dropdownitem__row level-item'>
          <img
            src={process.env.PUBLIC_URL + '/icons/pokemons/' + this.props.name + '.png'}
            className='dropdownitem__icon'
            alt=''
          />
          <span>{this.pokemonNameBeautifier.beautifyName(this.props.name)}</span>
        </div>
      </a>
    )
  }
}
