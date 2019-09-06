import React from 'react'
import { shallow } from 'enzyme'
import { PokemonDisplay } from './PokemonDisplay'
import 'chai'
import 'mocha'

describe('PokemonDisplay', () => {
  it('should render', () => {
    shallow(<PokemonDisplay match={{ params: { name: 'dragonite' }}} />)
  })
})
