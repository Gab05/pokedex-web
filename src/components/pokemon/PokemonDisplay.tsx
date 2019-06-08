import React from 'react'
import { Pokemon } from '../../models/pokemon/Pokemon'
import { PokemonNameBeautifier } from '../../services/nameBeautifiers/PokemonNameBeautifier'
import ServiceContainer from '../../services/ServiceContainer'
import { PokemonService } from '../../services/pokemon/PokemonService'
import { RouteProps } from 'react-router'
import { TypeDisplay } from '../type/TypeDisplay'
import { PokemonSprites } from './PokemonSprites'
import { PokemonTitle } from './PokemonTitle'
import './PokemonDisplay.css'

interface PokemonState {
  name: string
  pokemon: Pokemon
}

export class PokemonDisplay extends React.Component<any & RouteProps, PokemonState> {

  private readonly pokemonService = ServiceContainer.get(PokemonService)
  private readonly pokemonNameBeautifier = ServiceContainer.get(PokemonNameBeautifier)

  constructor(props: any) {
    super(props)

    this.state = {
      name: this.props.match.params.name,
      pokemon: {},
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
      <div className='pokemon_display'>
        <PokemonTitle
          name={this.pokemonNameBeautifier.beautifyName(this.state.name)}
          nationalNumber={this.pokemonService.getNumberFromName(this.state.name)}
        />
        <div className='container'>
          <div className='tile is-ancestor'>
            <div className='tile is-vertical is-8'>
              <div className='tile'>
                <div className='tile is-vertical is-half'>
                  <div className='tile'>
                    <PokemonSprites name={this.props.name} />
                  </div>
                  <div className='tile'>
                    <div className='tile is-parent'>
                      <article className='tile is-child is-half notification is-info'>
                        <p className='title has-text-centered'> Type</p>
                        <TypeDisplay types={this.state.pokemon!.typing} />
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child is-half notification is-info'>
                        <p className='title'>Abilities</p>
                      </article>
                    </div>
                  </div>
                </div>
                <div className='tile is-parent'>
                  <article className='tile is-child notification is-info'>
                    <p className='title'>Base stats</p>
                    <p className='subtitle'>With an image</p>
                    <figure className='image is-4by3'/>
                  </article>
                </div>
              </div>
              <div className='tile is-parent'>
                <article className='tile is-child notification is-dark'>
                  <p className='title'>Move List</p>
                  <p className='subtitle'>Aligned with the right tile</p>
                  <div className='content'>
                    content
                  </div>
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
