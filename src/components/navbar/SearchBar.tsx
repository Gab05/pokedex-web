import React from 'react'
import { Dropdown } from '../dropdown/Dropdown'
import { Query } from '../../models/Query'
import ServiceContainer from '../../services/ServiceContainer'
import { PokemonService } from '../../services/pokemon/PokemonService'
import './SearchBar.css'

interface SearchBarState {
  query: Query
  showDropdown: boolean
  matchingPokemonNames: string[]
}

export class SearchBar extends React.Component<any, SearchBarState> {

  private readonly pokemonService = ServiceContainer.get(PokemonService)

  constructor(props: any) {
    super(props)
    this.state = {
      query: new Query(''),
      showDropdown: false,
      matchingPokemonNames: [],
    }
    this.updateQuery = this.updateQuery.bind(this)
  }

  componentDidMount() {
    document.addEventListener('click', (event: any) => this.handleClick(event))
  }

  render() {
    return(
      <div>
        <input
          value={this.state.query.value}
          onChange={this.updateQuery}
          placeholder='Look for a Pokémon / Move ...'
          className='searchbar__input input is-rounded'
        />
        {this.state.showDropdown ? <Dropdown pokemonNames={this.state.matchingPokemonNames}/> : null}
      </div>
    )
  }

  private readonly updateQuery = (event: any) => {
    const newInputValue = event.target.value

    this.setState(() => {
      return { query: new Query(newInputValue) }
    }, this.loadDropdown)
  }

  private handleClick = (event: any) => {
    if (event.target.matches('.searchbar__input'))
      this.showDropdown()
    else
      this.hideDropdown()
  }

  private loadDropdown = () => {
    if (this.state.query.value.length >= 2)
      this.findMatchingPokemonNames()
    else
      this.hideDropdown()
  }

  private findMatchingPokemonNames = () => {
    this.setState((state) => {
      return {
        matchingPokemonNames: this.pokemonService.getPokemonList().filter((name: string) => {
          return state.query.isASubsequenceOf(name.replace(/ /g, ''))
        }),
      }
    }, this.showDropdown)
  }

  private showDropdown = () => {
    this.setState(() => {
      return { showDropdown: true }
    })
  }

  private hideDropdown = () => {
    this.setState(() => {
      return { showDropdown: false }
    })
  }
}
