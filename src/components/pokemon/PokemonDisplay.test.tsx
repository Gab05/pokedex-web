import React from 'react'
import 'chai'
import 'mocha'
import { shallow } from 'enzyme'
import { PokemonDisplay } from './PokemonDisplay'

describe('Pokemon', () => {
  it('should render', () => {
    shallow(<PokemonDisplay match={{ params: { name: 'dragonite' }}} />)
  })
})
