import React from 'react'
import './PokemonTitle.css'

interface PokemonTitleProps {
  name: string
  nationalNumber: number
}

export class PokemonTitle extends React.Component<PokemonTitleProps, any> {

  render() {
    return (
      <section className='hero is-link'>
        <div className='hero-body'>
          <h1 className='pokemon__title title has-text-left'>
            #{this.props.nationalNumber} {this.props.name}
          </h1>
        </div>
      </section>
    )
  }
}
