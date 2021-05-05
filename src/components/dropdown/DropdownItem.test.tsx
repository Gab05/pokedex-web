import { shallow } from 'enzyme'
import 'mocha'
import React from 'react'
import { ResourceType } from '../../models/ResourceType'
import { DropdownItem } from './DropdownItem'

describe('DropdownItem', () => {
  it('should render', () => {
    const component = shallow(<DropdownItem resourceType={ResourceType.POKEMON} name='garchomp'/>)
  })
})
