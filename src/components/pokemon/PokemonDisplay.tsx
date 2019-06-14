import React from 'react'
import { PokemonFactory } from '../../factories/PokemonFactory'
import { Pokemon } from '../../models/pokemon/Pokemon'
import { PokemonNameBeautifier } from '../../services/nameBeautifiers/PokemonNameBeautifier'
import ServiceContainer from '../../services/ServiceContainer'
import { PokemonService } from '../../services/pokemon/PokemonService'
import { RouteProps } from 'react-router'
import { TypesDisplay } from '../type/TypesDisplay'
import { PokemonSprites } from './PokemonSprites'
import { PokemonTitle } from './PokemonTitle'
import './PokemonDisplay.css'
import { StatsDisplay } from './Stats/StatsDisplay'

interface PokemonDisplayState {
  name: string
  pokemon: Pokemon
}

export class PokemonDisplay extends React.Component<any & RouteProps, PokemonDisplayState> {

  private readonly pokemonService = ServiceContainer.get(PokemonService)
  private readonly pokemonFactory = ServiceContainer.get(PokemonFactory)
  private readonly pokemonNameBeautifier = ServiceContainer.get(PokemonNameBeautifier)

  constructor(props: any) {
    super(props)

    this.state = {
      name: this.props.match.params.name,
      pokemon: this.pokemonFactory.createBlankPokemon(),
    }
  }

  componentDidMount(): void {
    this.pokemonService.fetchPokemonByName(this.state.name).then((fetchedPokemon) => {
      this.setState(() => {
        return { pokemon: fetchedPokemon }
      })
    })
  }

  render() {
    return (
      <div className='pokemon_display is-mobile'>
        <PokemonTitle
          name={this.state.name}
          beautifiedName={this.pokemonNameBeautifier.beautifyName(this.state.name)}
          nationalNumber={this.state.pokemon.nationalNumber}
        />
        <div className='container'>
          <div className='tile is-ancestor'>
            <div className='tile is-vertical is-8'>
              <div className='tile'>
                <div className='tile is-vertical is-half'>
                  <div className='tile'>
                    <PokemonSprites name={this.state.name} />
                  </div>
                  <div className='tile'>
                    <div className='tile is-parent'>
                      <article className='tile is-child is-half notification is-info'>
                        <p className='subtitle display__name'>TYPE</p>
                        <TypesDisplay types={this.state.pokemon.typing}/>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child is-half notification is-info'>
                        <p className='subtitle display__name'>ABILITIES</p>
                      </article>
                    </div>
                  </div>
                </div>
                <div className='tile is-parent'>
                  <article className='tile is-child notification is-info'>
                    <p className='subtitle display__name'>BASE STATS</p>
                    <StatsDisplay stats={this.state.pokemon.baseStats}/>
                  </article>
                </div>
              </div>
              <div className='tile is-parent'>
                <article className='tile is-child notification is-dark'>
                  <p className='title'>Move List</p>
                </article>
              </div>
            </div>
            <div className='tile is-parent'>
              <article className='tile is-child notification is-info'>
                <div className='content'>
                  <p className='title'>Basic info</p>
                  <div className='content'>
                    Base eggsteps...
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
