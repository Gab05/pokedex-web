import React from 'react'
import './PokemonTitle.css'

interface PokemonTitleProps {
  name: string
  nationalNumber: number
}

export class PokemonTitle extends React.Component<PokemonTitleProps, any> {

  render() {
    return (
      <section className='pokemon-title hero is-info'>
        <div className='hero-body'>
          <h1 className='pokemon-title__text title has-text-left'>
            #{this.props.nationalNumber} {this.props.name}
          </h1>
        </div>
      </section>
    )
  }
}
