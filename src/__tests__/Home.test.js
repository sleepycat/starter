import { shallow } from 'enzyme'
import Home from '../Home'
import React from 'react'

describe('<Home />', () => {
  it('renders', () => {
    const home = shallow(<Home />)
    expect(home.is('div')).toBeTruthy()
  })
})
