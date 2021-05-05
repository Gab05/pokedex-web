import React from 'react'
import EggGroupsService from '../../services/eggGroups/EggGroupsService';
import ServiceContainer from '../../services/ServiceContainer'
import { PokemonService } from '../../services/pokemon/PokemonService'
import { MoveService } from '../../services/move/MoveService'
import { Dropdown } from '../dropdown/Dropdown'
import { Query } from '../../models/Query'
import './SearchBar.css'

interface SearchBarState {
  query: Query
  showDropdown: boolean
  matchingPokemonNames: string[]
  matchingMoveNames: string[]
  matchingEggGroupsNames: string[]
}

export class SearchBar extends React.Component<any, SearchBarState> {

  private readonly pokemonService = ServiceContainer.get(PokemonService)
  private readonly moveService = ServiceContainer.get(MoveService)
  private readonly eggGroupsService = ServiceContainer.get(EggGroupsService)

  constructor(props: any) {
    super(props)
    this.state = {
      query: new Query(''),
      showDropdown: false,
      matchingPokemonNames: [],
      matchingMoveNames: [],
      matchingEggGroupsNames: [],
    }
    this.updateQuery = this.updateQuery.bind(this)
  }

  componentDidMount() {
    document.addEventListener('click', (event: any) => this.handleClick(event))
  }

  render() {
    return(
      <div className='searchbar navbar-item'>
        <div>
          <input
            autoFocus={true}
            value={this.state.query.value}
            onChange={this.updateQuery}
            placeholder='Pokémon / Move ...'
            className='searchbar__input input is-rounded'
          />
          {this.state.showDropdown ? this.renderDropdown() : null}
        </div>
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
    if (this.state.query.value.length >= 2) {
      this.findMatchingPokemonNames()
      this.findMatchingMoveNames()
      this.findMatchingEggGroupsNames()
    } else
      this.hideDropdown()
  }

  private findMatchingPokemonNames = () => {
    this.setState((state: SearchBarState) => {
      return {
        matchingPokemonNames: this.pokemonService.getPokemonList()
          .filter((name: string) => state.query.isASubsequenceOf(name)),
      }
    }, this.showDropdown)
  }

  private findMatchingMoveNames = () => {
    this.setState((state: SearchBarState) => {
      return {
        matchingMoveNames: this.moveService.getMoveList()
          .filter((move: {name: string, type: string}) => state.query.isASubsequenceOf(move.name))
          .map((move: {name: string, type: string}) => move.name),
      }
    }, this.showDropdown)
  }

  private findMatchingEggGroupsNames = () => {
    this.setState((state: SearchBarState) => ({
      matchingEggGroupsNames: this.eggGroupsService.getEggGroupList()
        .filter((name: string) => state.query.isASubsequenceOf(name)),
    }))
  }

  private showDropdown = () => {
    this.setState(() => ({ showDropdown: true }))
  }

  private hideDropdown = () => {
    this.setState(() => ({ showDropdown: false }))
  }

  private renderDropdown = () => {
    return (
      <Dropdown
        pokemonNames={this.state.matchingPokemonNames}
        moveNames={this.state.matchingMoveNames}
        eggGroupNames={this.state.matchingEggGroupsNames}
      />
    )
  }
}
