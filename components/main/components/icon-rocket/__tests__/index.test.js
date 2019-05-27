import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import IconRocket from '../index'

describe('With Enzyme', () => {
  it('Show the correct default svg', () => {
    const wrapper = shallow(<IconRocket />)
    expect(wrapper.find('path').prop('fill')).toEqual('#444')
  })
  it('Show the correct custom color', () => {
    const wrapper = shallow(<IconRocket fill="red" />)
    expect(wrapper.find('path').prop('fill')).toEqual('red')
  })
})

describe('With Snapshot Testing', () => {
  it('Show the correct default svg', () => {
    const component = renderer.create(<IconRocket />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Show the correct custom color', () => {
    const component = renderer.create(<IconRocket fill="red" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})