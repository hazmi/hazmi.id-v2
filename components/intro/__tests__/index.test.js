import React from 'react'
import renderer from 'react-test-renderer'
import Intro from '../index'

describe('With Snapshot Testing', () => {
  it('show the correct content', () => {
    const component = renderer.create(<Intro />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})