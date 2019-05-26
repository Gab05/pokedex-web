import React from 'react'
import { Dropdown } from "../dropdown/Dropdown";
import { Query } from "../../models/Query";
import './SearchBar.css'

interface SearchBarProps {
  pokemonList: string[]
}

interface SearchBarState {
  query: Query
  showDropdown: boolean
  matchingPokemonNames: string[]
}

export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {

  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      query: new Query(''),
      showDropdown: false,
      matchingPokemonNames: []
    };
    this.updateQuery = this.updateQuery.bind(this);
  }

  render () {
    return(
      <div>
        <input
          value={this.state.query.value}
          onChange={this.updateQuery}
          placeholder='Look for a Pokémon / Move ...'
          className='searchbar__input input is-rounded'
        />
        {this.state.showDropdown
          ? <Dropdown pokemonNames={this.state.matchingPokemonNames}/>
          : null
        }
      </div>
    );
  }

  updateQuery = (event: any) => {
    const newInputValue = event.target.value;

    this.setState(() => {
      return { query: new Query(newInputValue) }
    }, this.loadDropdown);
  };

  loadDropdown = () => {
    if (this.state.query.value.length >= 2) {
      this.findMatchingPokemonNames();
    }
    else this.hideDropdown()
  };

  findMatchingPokemonNames = () => {
    this.setState((state, props) => {
      return {
        matchingPokemonNames: props.pokemonList.filter((name: string) => {
          return state.query.isASubsequenceOf(name)
        })
      }
    }, this.showDropdown);
  };

  showDropdown = () => {
    this.setState(() => {
      return { showDropdown: true }
    })
  };

  hideDropdown = () => {
    this.setState(() => {
      return { showDropdown: false }
    })
  };
}
