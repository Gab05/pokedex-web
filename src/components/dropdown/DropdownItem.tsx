import React from 'react'
import ServiceContainer from '../../services/ServiceContainer'
import { NameBeautifier } from '../../services/nameBeautifiers/NameBeautifier'
import { ResourceType } from '../../models/ResourceType'
import { PokemonNameBeautifier } from '../../services/nameBeautifiers/PokemonNameBeautifier'
import { Link } from 'react-router-dom'
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
      <Link to={`/${this.props.type.toLowerCase()}/${this.props.name}`} className='dropdownitem level'>
        <div className='dropdownitem__row level-item'>
          <img
            src={process.env.PUBLIC_URL + '/icons/pokemons/' + this.props.name + '.png'}
            className='dropdownitem__icon'
            alt=''
          />
          <span>{this.pokemonNameBeautifier.beautifyName(this.props.name)}</span>
        </div>
      </Link>
    )
  }
}
