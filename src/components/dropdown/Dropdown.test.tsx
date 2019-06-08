import React from 'react'
import 'mocha'
import { mount, shallow } from 'enzyme'
import { Dropdown } from './Dropdown'
import { DropdownItem } from './DropdownItem'

describe('Dropdown', () => {

  describe('when pokemon names list is empty', () => {
    const component = shallow(<Dropdown pokemonNames={[]} />)
    it('should not have any DropdownItem children', () => {
      expect(component.find(DropdownItem).length).toBe(0)
    })
  })

  describe('when pokemon names list is not empty', () => {
    const component = shallow(<Dropdown pokemonNames={['tapu_bulu', 'tapu_lele', 'tapu_fini', 'tapu_koko']} />)

    it('should render the same amount of DropdownItem', () => {
      expect(component.find(DropdownItem).length).toBe(4)
    })

    it('should render DropdownItem elements by sorted pokemon name', () => {
      expect(component.find(DropdownItem).at(0).props().name).toBe('tapu_koko')
      expect(component.find(DropdownItem).at(3).props().name).toBe('tapu_fini')
    })
  })
})
