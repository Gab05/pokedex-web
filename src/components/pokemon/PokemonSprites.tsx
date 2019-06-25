import React from 'react'
import ServiceContainer from '../../services/ServiceContainer'
import { PokemonService } from '../../services/pokemon/PokemonService'
import { LoadingSpinner } from '../LoadingSpinner'
import './PokemonSprites.css'

interface PokemonSpritesProps {
  name: string
}

interface PokemonSpritesState {
  normalUrl: string,
  shinyUrl: string,
  normalLoading: boolean,
  shinyLoading: boolean,
}

export class PokemonSprites extends React.Component<PokemonSpritesProps, PokemonSpritesState> {

  private readonly pokemonService = ServiceContainer.get(PokemonService)

  constructor(props: any) {
    super(props)

    this.state = {
      normalUrl: this.pokemonService.getNormalSpriteUrl(props.name),
      shinyUrl: this.pokemonService.getShinySpriteUrl(props.name),
      normalLoading: true,
      shinyLoading: true,
    }
  }

  render() {
    const normalImg = (
      <img
        src={this.state.normalUrl}
        onLoad={() => this.hideNormalLoader()}
        alt=''
      />
    )
    const shinyImg = (
      <img
        src={this.state.shinyUrl}
        onLoad={() => this.hideShinyLoader()}
        alt=''
      />
    )

    return (
      <div className='tile level is-mobile'>
        <div className='tile is-parent'>
          <div className='tile is-child notification is-info'>
            {normalImg}
            {this.state.normalLoading ? <LoadingSpinner/> : null}
            <p className='pokemon-sprite__label'>NORMAL</p>
          </div>
        </div>
        <div className='tile is-parent'>
          <div className='tile is-child notification is-info'>
            {shinyImg}
            {this.state.shinyLoading ? <LoadingSpinner/> : null}
            <p className='pokemon-sprite__label'>SHINY</p>
          </div>
        </div>
      </div>
    )
  }

  private hideNormalLoader() {
    this.setState(() => {
      return { normalLoading: false }
    })
  }

  private hideShinyLoader() {
    this.setState(() => {
      return { shinyLoading: false }
    })
  }
}
