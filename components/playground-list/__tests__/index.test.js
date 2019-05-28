import React from 'react'
import renderer from 'react-test-renderer'
import PlaygroundList from '../index'

describe('With Snapshot Testing', () => {
  it('show the correct content', () => {
    const component = renderer.create(<PlaygroundList />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})