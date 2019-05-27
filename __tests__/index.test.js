import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Index from '../pages/index'

describe('With Enzyme', () => {
  it('App shows "Hello"', () => {
    const app = shallow(<Index />)

    expect(app.find('p').text()).toEqual('Hello')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Hello"', () => {
    const component = renderer.create(<Index />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})