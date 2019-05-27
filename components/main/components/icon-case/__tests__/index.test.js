import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import IconCase from '../index'

describe('With Enzyme', () => {
  it('Show the correct default svg', () => {
    const wrapper = shallow(<IconCase />)
    expect(wrapper.find('path').prop('fill')).toEqual('#444')
  })
  it('Show the correct custom color', () => {
    const wrapper = shallow(<IconCase fill="red" />)
    expect(wrapper.find('path').prop('fill')).toEqual('red')
  })
})

describe('With Snapshot Testing', () => {
  it('Show the correct default svg', () => {
    const component = renderer.create(<IconCase />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Show the correct custom color', () => {
    const component = renderer.create(<IconCase fill="red" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})