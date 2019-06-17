import React from 'react'
import { RouteProps } from 'react-router'
import './MoveDisplay.css'

interface MoveDisplayState {
  name: string
}

export class MoveDisplay extends React.Component<any & RouteProps, MoveDisplayState> {
  constructor(props: any) {
    super(props)

    this.state = {
      name: this.props.match.params.name,
    }
  }

  render() {
    return (
      <section className='move-title hero is-success'>
        <div className='hero-body level'>
          <div className='level-left'>
            <h1 className='move-title__text title level-item has-text-left'>
              # {this.state.name ? this.state.name: ''}
            </h1>
          </div>
        </div>
      </section>
    )
  }
}
