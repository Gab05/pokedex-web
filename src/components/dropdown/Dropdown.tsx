import React from 'react'
import {DropdownItem} from "./DropdownItem";
import {DropdownItemType} from "./DropdownItemType";

interface DropdownProps {

}

interface DropdownState {
  pokemonNames: string[]
}

export class Dropdown extends React.Component<DropdownProps, DropdownState> {

  render() {
    const displayedItems: JSX.Element[] = [];
    for (const name of this.state.pokemonNames) {
      displayedItems.push(<DropdownItem name={name} type={DropdownItemType.POKEMON} />)
    }

    displayedItems.sort((a, b) => {
      return a.props.name.localeCompare(b.props.name)
    });

    return(
      <div>
        { displayedItems }
      </div>
    );
  }
}
