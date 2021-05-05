import React from 'react'
import 'mocha'
import { shallow } from 'enzyme'
import { Dropdown } from './Dropdown'
import { DropdownItem } from './DropdownItem'

describe('Dropdown', () => {

  describe('when pokemon names list is empty', () => {
    const component = shallow(<Dropdown eggGroupNames={[]} pokemonNames={[]} moveNames={[]}/>)
    it('should not have any DropdownItem children', () => {
      expect(component.find(DropdownItem).length).toBe(0)
    })
  })

  describe('when pokemon names list is not empty', () => {
    const component = shallow(
      <Dropdown
        eggGroupNames={[]}
        pokemonNames={['tapu_bulu', 'tapu_lele', 'tapu_fini', 'tapu_koko']}
        moveNames={[]}
      />
    )

    it('should render the same amount of DropdownItem', () => {
      expect(component.find(DropdownItem).length).toBe(4)
    })
  })
})
