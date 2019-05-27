import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import IconToy from '../index'

describe('With Enzyme', () => {
  it('Show the correct default svg', () => {
    const wrapper = shallow(<IconToy />)
    expect(wrapper.find('path').prop('fill')).toEqual('#444')
  })
  it('Show the correct custom color', () => {
    const wrapper = shallow(<IconToy fill="red" />)
    expect(wrapper.find('path').prop('fill')).toEqual('red')
  })
})

describe('With Snapshot Testing', () => {
  it('Show the correct default svg', () => {
    const component = renderer.create(<IconToy />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Show the correct custom color', () => {
    const component = renderer.create(<IconToy fill="red" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})