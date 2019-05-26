import React from 'react'
import {DropdownItem} from "./DropdownItem";
import {DropdownItemType} from "./DropdownItemType";
import './Dropdown.css'

interface DropdownProps {
  pokemonNames: string[]
}

interface DropdownState {

}

export class Dropdown extends React.Component<DropdownProps, DropdownState> {

  render() {
    const displayedItems: JSX.Element[] = [];
    for (const name of this.props.pokemonNames) {
      displayedItems.push(<DropdownItem name={name} type={DropdownItemType.POKEMON} key={name} />)
    }

    displayedItems.sort((a, b) => {
      return a.props.name.localeCompare(b.props.name)
    });

    return(
      <div className='dropdown__content'>
        {displayedItems}
      </div>
    );
  }
}
