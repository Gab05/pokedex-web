import React from 'react'
import { Router } from 'react-router'
import { App } from './App'
import { shallow, ShallowWrapper } from 'enzyme'
import { Navbar } from './components/navbar/Navbar'

describe('App', () => {

  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

  it('should render the Router', () => {
    expect(wrapper.find(Router)).toBeTruthy()
  })

  it('should render the Navbar', () => {
    expect(wrapper.find(Navbar)).toBeTruthy()
  })
})
