import React from 'react'
import { DropdownItemType } from "./DropdownItemType";
import './DropdownItem.css'

interface DropdownItemProps {
  type: DropdownItemType
  name: string
}

interface DropdownItemState {
  selected: boolean
}

export class DropdownItem extends React.Component<DropdownItemProps, DropdownItemState> {
  constructor(props: DropdownItemProps) {
    super(props);
    this.state = { selected: false }
  }

  render() {
    return (
      <div className='dropdownitem'>
        <img src={this.getIconStaticUrl()} alt='' />
        <span>{this.props.name}</span>
      </div>
    );
  }

  getIconStaticUrl = (): string =>{
    return '../../assets/pokemons/' + this.props.name + '.png'
  }
}
