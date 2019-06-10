import React from 'react'
import { PokemonService } from '../../services/pokemon/PokemonService'
import ServiceContainer from '../../services/ServiceContainer'
import './PokemonSprites.css'

interface PokemonSpritesProps {
  name: string
}

interface PokemonSpritesState {
  normalUrl: string,
  shinyUrl: string
}

export class PokemonSprites extends React.Component<PokemonSpritesProps, PokemonSpritesState> {

  private readonly pokemonService = ServiceContainer.get(PokemonService)

  constructor(props: any) {
    super(props)

    this.state = {
      normalUrl: '',
      shinyUrl: '',
    }
  }

  componentDidMount(): void {
    this.setState((_, props) => {
      return {
        normalUrl: this.pokemonService.getNormalSpriteUrl(props.name),
        shinyUrl: this.pokemonService.getShinySpriteUrl(props.name),
      }
    })
  }

  render() {
    const normalImg = <img src={this.state.normalUrl} className='pokemon-sprite__img' alt=''/>
    const shinyImg = <img src={this.state.shinyUrl} className='pokemon-sprite__img' alt=''/>

    return (
      <div className='tile '>
        <div className='tile is-parent'>
          <div className='tile is-child notification is-info'>
            {this.state.normalUrl ? normalImg : null}
            <p className='pokemon-sprite__label'>NORMAL</p>
          </div>
        </div>
        <div className='tile is-parent'>
          <div className='tile is-child notification is-info'>
            {this.state.shinyUrl ? shinyImg : null}
            <p className='pokemon-sprite__label'>SHINY</p>
          </div>
        </div>
      </div>
    )
  }
}
