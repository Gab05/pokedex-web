import React from 'react'
import { Dropdown } from "../dropdown/Dropdown";
import { Query } from "../../models/Query";

interface SearchDropdownProps {
  pokemons: string[]
}

interface SearchDropdownState {
  query: Query
  inputValue: string
  matchingPokemonNames: string[]
}

export class SearchBar extends React.Component<SearchDropdownProps, SearchDropdownState> {

  render () {
    return(
      <div>
        <input
          onChange={this.updateQuery.bind(this)}
          className='input is-rounded'
        />
        <Dropdown />
      </div>
    );
  }

  updateQuery = () => {
    this.setState((state) => {
      return { query: new Query(state.inputValue) }
    });
    this.findMatchingPokemonNames()
  };

  findMatchingPokemonNames = () => {
    return this.props.pokemons.filter((name: string) => {
      return this.state.query.isASubsequenceOf(name)
    })
  }
}
