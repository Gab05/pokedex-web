import React from 'react'

interface PokemonTitleProps {
  name: string
  nationalNumber: number
}

export class PokemonTitle extends React.Component<PokemonTitleProps, any> {

  render() {
    return (
      <section className='hero is-link pokemon__title'>
        <div className='hero-body pokemon__title'>
          <div className='container'>
            <h1 className='title has-text-left'>
              #{this.props.name} {this.props.nationalNumber}
            </h1>
          </div>
        </div>
      </section>
    )
  }
}
