import React from 'react'
import renderer from 'react-test-renderer'
import PastProjects from '../pages/index'

describe('With Snapshot Testing', () => {
  it('show the correct past projects page', () => {
    const component = renderer.create(<PastProjects />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})