import React from 'react'
import 'chai'
import 'mocha'
import { mount, shallow } from 'enzyme'
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

  describe('when witnessing click events', () => {
    const map: any = {}

    beforeAll(() => {
      document.addEventListener = jest.fn((event, callback) => {
        map[event] = callback
      })
    })

    it('should set showDropdown prop to false', () => {
      const component = mount(<SearchBar />)
      component.setState({ showDropdown: true })
      map.click()
      expect(component.state('showDropdown')).toBeFalsy()
    })
  })


})
