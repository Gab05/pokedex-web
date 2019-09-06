import React from 'react'
import './PokemonTitle.css'

interface PokemonTitleProps {
  name: string
  beautifiedName: string
  nationalNumber?: number
}

export class PokemonTitle extends React.Component<PokemonTitleProps, any> {

  render() {
    return (
      <section className='pokemon-title hero is-info'>
        <div className='hero-body level'>
          <div className='level-left'>
            <h1 className='pokemon-title__text title level-item has-text-left'>
              #{this.props.nationalNumber ? this.props.nationalNumber: ''} {this.props.beautifiedName}
            </h1>
            <img
              src={`${process.env.PUBLIC_URL}/icons/pokemons/${this.props.name}.png`}
              className='pokemon-title__icon level-item'
              alt=''
            />
          </div>
        </div>
      </section>
    )
  }
}
