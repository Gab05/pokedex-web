import React from 'react'
import 'chai'
import 'mocha'
import { shallow } from 'enzyme'
import { Pokemon } from './Pokemon'

describe('Pokemon', () => {
  it('should render', () => {
    shallow(<Pokemon match={{ params: { name: 'dragonite' }}} />)
  })
})
