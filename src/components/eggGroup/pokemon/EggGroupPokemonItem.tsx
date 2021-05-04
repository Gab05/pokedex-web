import React, { Component } from 'react'
import './EggGroupPokemonItem.css'
import { LoadingSpinner } from '../../LoadingSpinner'

interface EggGroupPokemonItemProps {
  pokemonName: string
  beautifiedName: string
  spriteUrl: string
}

interface EggGroupPokemonItemState {
  loading: boolean
}

export default class EggGroupPokemonItem extends Component<EggGroupPokemonItemProps, EggGroupPokemonItemState> {

  constructor(props: any) {
    super(props)

    this.state = {
      loading: true,
    }
  }

  render() {
    return (
      <div className='pokemon-item-container tile is-parent box notification is-2'>
        <div className='pokemon-item tile is-child is-12'>
          <div className='sprite-container'>
            {this.state.loading ? <LoadingSpinner/> : null}
            <a href={`/pokemon/${this.props.pokemonName}`}>
              <img
                src={this.props.spriteUrl}
                onLoad={() => this.setState({ loading: false })}
                alt=''
              />
            </a>
          </div>
          <div className='pokemon-name-container'>
            <a href={`/pokemon/${this.props.pokemonName}`}>
              {this.props.beautifiedName}
            </a>
          </div>
        </div>
      </div>
    )
  }
}
