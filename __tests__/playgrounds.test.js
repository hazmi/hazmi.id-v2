import React from 'react'
import renderer from 'react-test-renderer'
import Playgrounds from '../pages/index'

describe('With Snapshot Testing', () => {
  it('show the correct playgrounds page', () => {
    const component = renderer.create(<Playgrounds />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})