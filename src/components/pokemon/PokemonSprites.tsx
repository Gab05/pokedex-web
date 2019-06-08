import React from 'react'

interface PokemonSpritesProps {
  name: string
}

export class PokemonSprites extends React.Component<PokemonSpritesProps, any> {

  render() {
    return (
      <div className='tile '>
        <div className='tile is-parent'>
          <article className='tile is-child notification is-info'>
            <p className='subtitle'>normal</p>
          </article>
        </div>
        <div className='tile is-parent'>
          <article className='tile is-child notification is-info'>
            <p className='subtitle'>shiny</p>
          </article>
        </div>
      </div>
    )
  }
}
