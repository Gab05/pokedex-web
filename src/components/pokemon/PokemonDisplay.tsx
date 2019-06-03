import React from 'react'
import { Pokemon } from '../../models/pokemon/Pokemon'
import { PokemonNameBeautifier } from '../../services/nameBeautifiers/PokemonNameBeautifier'
import ServiceContainer from '../../services/ServiceContainer'
import { PokemonService } from '../../services/PokemonService'
import { RouteProps } from 'react-router'
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
        <div>
          TYPE: {this.state.pokemon!.typing}
        </div>
        <div className='container'>
          <div className='tile is-ancestor'>
            <div className='tile is-vertical is-8'>
              <div className='tile'>
                <div className='tile is-parent is-vertical'>
                  <article className='tile is-child notification is-primary'>
                    <p className='title'>Vertical...</p>
                    <p className='subtitle'>Top tile</p>
                  </article>
                  <article className='tile is-child notification is-warning'>
                    <p className='title'>...tiles</p>
                    <p className='subtitle'>Bottom tile</p>
                  </article>
                </div>
                <div className='tile is-parent'>
                  <article className='tile is-child notification is-info'>
                    <p className='title'>Middle tile</p>
                    <p className='subtitle'>With an image</p>
                    <figure className='image is-4by3'>
                    </figure>
                  </article>
                </div>
              </div>
              <div className='tile is-parent'>
                <article className='tile is-child notification is-danger'>
                  <p className='title'>Wide tile</p>
                  <p className='subtitle'>Aligned with the right tile</p>
                  <div className='content'>
                    content
                  </div>
                </article>
              </div>
            </div>
            <div className='tile is-parent'>
              <article className='tile is-child notification is-success'>
                <div className='content'>
                  <p className='title'>Tall tile</p>
                  <p className='subtitle'>With even more content</p>
                  <div className='content'>
                    content
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
