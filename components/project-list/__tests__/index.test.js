import React from 'react'
import renderer from 'react-test-renderer'
import ProjectList from '../index'

describe('With Snapshot Testing', () => {
  it('show the correct content', () => {
    const component = renderer.create(<ProjectList />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})