import React from 'react'
import 'mocha'
import { mount, shallow } from 'enzyme'
import { Query } from '../../models/Query'
import { Dropdown } from '../dropdown/Dropdown'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {

  describe('when rendering', () => {
    beforeEach(() => {
      jest.spyOn(SearchBar.prototype, 'componentDidMount')
      shallow(<SearchBar />)
    })

    it('should call componentDidMount', () => {
      expect(SearchBar.prototype.componentDidMount).toHaveBeenCalled()
    })
  })

  describe('when input changes', () => {
    const component = shallow(<SearchBar />)

    describe('when value length is greater than 2', () => {
      const value = 'pichu'

      beforeEach(() => {
        component.setState({
          query: new Query(''),
          showDropdown: false,
          matchingPokemonNames: [],
        })
        component.find('input').simulate('change', { target: { value }})
      })

      it('should update the query state', () => {
        expect(component.state('query')).toHaveProperty('value', value)
      })

      it('should update matchingPokemonNames state', () => {
        expect(component.state('matchingPokemonNames')).toStrictEqual([
          'pikachu',
          'pichu',
        ])
      })

      it('should set showDropdown state to true', () => {
        expect(component.state('showDropdown')).toBeTruthy()
      })

      it('should display the Dropdown component', () => {
        expect(component.find(Dropdown).length).toBe(1)
      })
    })

    describe('when value length is less than 2', () => {
      const value = 'p'

      beforeEach(() => {
        component.setState({
          query: new Query(''),
          showDropdown: true,
          matchingPokemonNames: [],
        })
        component.find('input').simulate('change', { target: { value }})
      })

      it('should update the query state', () => {
        expect(component.state('query')).toHaveProperty('value', value)
      })

      it('should set showDropdown state to false', () => {
        expect(component.state('showDropdown')).toBeFalsy()
      })

      it('should not add pokemon names to matchingPokemonNames state', () => {
        expect(component.state('matchingPokemonNames')).toStrictEqual([])
      })
    })
  })
})
